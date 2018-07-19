--[[
 В conkyrc поместить следующие строки выше слова TEXT

lua_load ~/путь_до_скрипта/forecast_v.3.lua
lua_draw_hook_pre forecast_date

]]

usrhome = os.getenv("HOME")

dofile (usrhome .. "/.my_config/scripts/text.lua")	-- скрипт выводит тексты
dofile (usrhome .. "/.my_config/scripts/image.lua")	-- скрипт выводит иконки прогноза

secs = 600	-- обновление каждые 10 минут

web = "http://www.intellicast.com/Local/Forecast.aspx?unit=C&location=RSXX0077"	-- погода для Сочи.

units = "C"		-- температура в градусах Цельсия

weathericons = usrhome .. "/.my_config/weathericons/"	-- место хранения иконок

require 'cairo'

function conky_forecast_date()

	local updates = tonumber(conky_parse('${updates}'))
	local timer = (updates %secs) + 1						-- устанавливаем время обновления
	if timer == 1 or updates == 0 then

-- выбираем необходимые данные о погоде и записываем в память

		local f = io.popen("curl '"..web.."' | grep -A62 'As of ' | gawk -F'>' -v RS='</' 'RT{print $NF}' | sed -e 's/^[ \t]*//' -e '/^$/d' -e 's/&deg;//g' -e 's/%//g' -e 's/  / /g' -e 's/Thunderstorms/T.Storms/g'")
		data1 = f:read("*a")
		f:close()

		local data2 = string.split(data1,"\n")
		data = {}
		for i, v in pairs(data2) do
			if string.find(v,"[%a%d]") ~= nil then
				table.insert(data, data2[i])
			end
		end

-- выбираем необходимые данные для прогноза на 10 суток и записываем в память

		local f = io.popen("curl '"..web.."' | grep -A554 'View the Calendar Forecast' | gawk -F'>' -v RS='<' 'RT{print $NF}' | sed -e 's/^[ \t]*//' -e 's/&deg;//g' -e 's/  / /g' -e 's/%//g' -e 's/&deg//g' -e 's/Thunderstorms/T.Storms/g'")
		local fdata1 = f:read("*a")
		f:close()

		local fdata = string.split(fdata1, "\n")
		fdata2 = {}
		for i, v in pairs(fdata) do
			if string.find(v,"[%a%d]") ~= nil then
				table.insert(fdata2, fdata[i])
			end
		end

-- выбираем необходимые данные для иконок и записываем в память

		local f = io.popen("curl '"..web.."' | gawk -F'App_Images' -v RS='.png' 'RT{print $NF}'")
		icondata1 = f:read("*a")
		f:close()

		local icondata = string.split(icondata1, "\n")
		icondata2 = {}
		for i, v in pairs(icondata) do
			if string.find(v, "32_white") == nil then
				table.insert(icondata2, icondata[i])
			end
		end

-- текущая погода

		local cdn = string.split(data[2], "/")
		if cdn[2] == nil then
			cd2 = ""
		else
			cd2 = "/" .. string.gsub(cdn[2], "[\r\n]", "")
		end
		local wdr = string.split(data[25], " ")
		now = {
				con = string.gsub(cdn[1], "[\r\n]", ""),		-- состояние погоды
				tmp = string.gsub(data[4], units, ""),			-- температура
				flk = string.gsub(data[5], "Feels Like: ", ""),	-- по ощущению
				wch = data[7],									-- охлаждение ветром
				cel = data[10],									-- ceiling (потолок ?????)
				hid = data[12],									-- индекс жары
				vis = string.gsub(data[15], "[ %a]", ""),		-- видимость
				dpt = data[17],									-- точка росы
				wsp = string.gsub(data[20], "[ %a]", ""),		-- скорость ветра в мили/час
				wdg = (wdr[1]),									-- направление ветра в градусах
				wdi = string.gsub(wdr[2], "[%(%)\n\r]", ""),	-- направление ветра в румбах NSEW
				wgs = string.gsub(data[30], " mph", ""),		-- сила порывов ветра
				hum = data[22],									-- влажность
				prs = string.gsub(data[27], "\"", ""),			-- давление
				cd2 = cd2										-- вторичные условия
				}

--############################################

-- прогноз погоды на 10 дней

		local cdn = string.split(fdata2[3], "/")

		if cdn[2] == nil then
			cd2 = "" 
		else
			cd2 = "/" .. cdn[2]
		end

		local dyt = string.split(fdata2[2], ",")
		local uvi = string.split(fdata2[20], " ")
		local wsp = string.split(fdata2[32], " ")
		local wdr = string.split(fdata2[34], " ")

		day1 = {
				day = dyt[1],									-- день
				dat = string.gsub(dyt[2], "^.", ""),			-- дата
				con = cdn[1],									-- состояние погоды
				hih = fdata2[4],								-- самая высокая температура
				low = fdata2[5],								-- самая низская температура
				sri = fdata2[8],								-- восход Солнца
				sst = fdata2[10],								-- закат Солнца
				mri = fdata2[12],								-- восход Луны
				mst = fdata2[14],								-- закат луны
				uvn = uvi[1],									-- ультрафиолетовый индекс
				uvt = string.gsub(uvi[2], "[%(%)]", ""),		--
				hum = fdata2[22],								-- влажность
				ppt = fdata2[24],								-- вероятность осадков
				snw = fdata2[26],								-- вероятность срегопада
				cld = fdata2[28],								-- облачность
				mph = fdata2[30],								-- фазы луны
				wmh = string.gsub(wsp[1], "[%a]", ""),			-- скорость ветра (мили/час)
				wkm = string.gsub(wsp[2], "[%a%(,]", ""),		-- скорость ветра (км/час)
				wkt = string.gsub(wsp[3], "[%a%)]", ""),		-- скорость ветра в узлах
				wdg = wdr[1],									-- направление ветра в градусах
				wdi = string.gsub(wdr[2], "[%(%)\n\r]", ""),	-- направление ветра в румбах NSEW
				cd2 = cd2										-- вторичные условия
				}
--day2
		local cdn = string.split(fdata2[36], "/")
		if cdn[2] == nil then
			cd2 = "" 
		else
			cd2 = "/" .. cdn[2]
		end

		local dyt = string.split(fdata2[35], ",")
		local uvi = string.split(fdata2[53], " ")
		local wsp = string.split(fdata2[65], " ")
		local wdr = string.split(fdata2[67], " ")
		day2 = {day = dyt[1], dat = string.gsub(dyt[2], "^.", ""), con = cdn[1], hih = fdata2[37], low = fdata2[38], sri = fdata2[41], sst = fdata2[43], mri = fdata2[45], mst = fdata2[47], uvn = uvi[1], uvt = string.gsub(uvi[2], "[%(%)]", ""), hum = fdata2[55], ppt = fdata2[57], snw = fdata2[59], cld = fdata2[61], mph = fdata2[63], wmh = string.gsub(wsp[1], "[%a]", ""), wkm = string.gsub(wsp[2], "[%a%(,]", ""), wkt = string.gsub(wsp[3], "[%a%)]", ""), wdg = wdr[1], wdi = string.gsub(wdr[2], "[%(%)\n\r]", ""), cd2 = cd2}
-- day3
		local start = 68
		local cdn = string.split(fdata2[start + 1], "/")
		if cdn[2] == nil then
			cd2 = ""
		else
			cd2 = "/" .. cdn[2]
		end
		local dyt = string.split(fdata2[start], ",")
		local uvi = string.split(fdata2[start + 14], " ")
		local wsp = string.split(fdata2[start + 26], " ")
		local wdr = string.split(fdata2[start + 28], " ")
		day3 = {day = dyt[1], dat = string.gsub(dyt[2], "^.", ""), con = cdn[1], hih = fdata2[start + 2], low = fdata2[start + 3], sri = fdata2[start + 5], sst = fdata2[start + 7], mri = fdata2[start + 9], mst = fdata2[start + 11], uvn = uvi[1], uvt = string.gsub(uvi[2], "[%(%)]", ""), hum = fdata2[start + 16], ppt = fdata2[start + 18], snw = fdata2[start + 20], cld = fdata2[start + 22], mph = fdata2[start + 24], wmh = string.gsub(wsp[1], "[%a]", ""), wkm = string.gsub(wsp[2], "[%a%(,]" ,"") ,wkt = string.gsub(wsp[3], "[%a%)]", ""), wdg = wdr[1], wdi = string.gsub(wdr[2], "[%(%)\n\r]", ""), cd2 = cd2}
--day4
		local start = start + 29
		local cdn = string.split(fdata2[start + 1], "/")
		if cdn[2] == nil then
			cd2 = ""
		else
			cd2 = "/" .. cdn[2]
		end
		local dyt = string.split(fdata2[start], ",")
		local uvi = string.split(fdata2[start + 14], " ")
		local wsp = string.split(fdata2[start + 26], " ")
		local wdr = string.split(fdata2[start + 28], " ")
		day4 = {day = dyt[1], dat = string.gsub(dyt[2], "^.", ""), con = cdn[1], hih = fdata2[start + 2], low = fdata2[start + 3], sri = fdata2[start + 5], sst = fdata2[start + 7], mri = fdata2[start + 9], mst = fdata2[start + 11],uvn = uvi[1], uvt = string.gsub(uvi[2], "[%(%)]", ""), hum = fdata2[start + 16], ppt = fdata2[start + 18], snw = fdata2[start + 20], cld = fdata2[start + 22], mph = fdata2[start + 24], wmh = string.gsub(wsp[1], "[%a]", ""), wkm = string.gsub(wsp[2], "[%a%(,]", ""), wkt = string.gsub(wsp[3], "[%a%)]", ""), wdg = wdr[1], wdi = string.gsub(wdr[2], "[%(%)\n\r]", ""), cd2 = cd2}
-- day5
		local start = start + 29
		local cdn = string.split(fdata2[start + 1], "/")
		if cdn[2] == nil then
			cd2 = ""
		else
			cd2 = "/" .. cdn[2]
		end
		local dyt = string.split(fdata2[start], ",")
		local uvi = string.split(fdata2[start + 14], " ")
		local wsp = string.split(fdata2[start + 26], " ")
		local wdr = string.split(fdata2[start + 28], " ")
		day5 = {day = dyt[1], dat = string.gsub(dyt[2], "^.", ""), con = cdn[1], hih = fdata2[start + 2], low = fdata2[start + 3], sri = fdata2[start + 5], sst = fdata2[start + 7], mri = fdata2[start + 9], mst = fdata2[start + 11], uvn = uvi[1], uvt = string.gsub(uvi[2], "[%(%)]", ""), hum = fdata2[start + 16], ppt = fdata2[start + 18], snw = fdata2[start + 20], cld = fdata2[start + 22], mph = fdata2[start + 24], wmh = string.gsub(wsp[1], "[%a]", ""), wkm = string.gsub(wsp[2], "[%a%(,]", ""), wkt = string.gsub(wsp[3], "[%a%)]", ""), wdg = wdr[1], wdi = string.gsub(wdr[2], "[%(%)\n\r]", ""), cd2 = cd2}
-- day6
		local start = start + 29
		local cdn = string.split(fdata2[start + 1], "/")
		if cdn[2] == nil then
			cd2 = ""
		else
			cd2 = "/" .. cdn[2]
		end
		local dyt = string.split(fdata2[start], ",")
		local uvi = string.split(fdata2[start + 14], " ")
		local wsp = string.split(fdata2[start + 26], " ")
		local wdr = string.split(fdata2[start + 28], " ")
		day6 = {day = dyt[1], dat = string.gsub(dyt[2], "^.", ""), con = cdn[1], hih = fdata2[start + 2], low = fdata2[start + 3], sri = fdata2[start + 5], sst = fdata2[start + 7], mri = fdata2[start + 9], mst = fdata2[start + 11], uvn = uvi[1], uvt = string.gsub(uvi[2], "[%(%)]", ""), hum = fdata2[start + 16], ppt = fdata2[start + 18], snw = fdata2[start + 20], cld = fdata2[start + 22], mph = fdata2[start + 24], wmh = string.gsub(wsp[1], "[%a]", ""), wkm = string.gsub(wsp[2], "[%a%(,]", ""), wkt = string.gsub(wsp[3], "[%a%)]", ""), wdg = wdr[1], wdi = string.gsub(wdr[2], "[%(%)\n\r]", ""), cd2 = cd2}
-- day7
		local start = start + 29
		local cdn = string.split(fdata2[start + 1], "/")
		if cdn[2] == nil then
			cd2 = ""
		else
			cd2 = "/" .. cdn[2]
		end
		local dyt = string.split(fdata2[start], ",")
		local uvi = string.split(fdata2[start + 14], " ")
		local wsp = string.split(fdata2[start + 26], " ")
		local wdr = string.split(fdata2[start + 28], " ")
		day7 = {day = dyt[1], dat = string.gsub(dyt[2], "^.", ""), con = cdn[1], hih = fdata2[start + 2], low = fdata2[start + 3], sri = fdata2[start + 5], sst = fdata2[start + 7], mri = fdata2[start + 9], mst = fdata2[start + 11], uvn = uvi[1], uvt = string.gsub(uvi[2], "[%(%)]", ""), hum = fdata2[start + 16], ppt = fdata2[start + 18], snw = fdata2[start + 20], cld = fdata2[start + 22], mph = fdata2[start + 24], wmh = string.gsub(wsp[1], "[%a]", ""), wkm = string.gsub(wsp[2], "[%a%(,]", ""), wkt = string.gsub(wsp[3], "[%a%)]", ""), wdg = wdr[1], wdi = string.gsub(wdr[2], "[%(%)\n\r]", ""), cd2 = cd2}
-- day8
		local start = start + 29
		local cdn = string.split(fdata2[start + 1],"/")
		if cdn[2] == nil then
			cd2 = ""
		else
			cd2 = "/" .. cdn[2]
		end
		local dyt = string.split(fdata2[start], ",")
		local uvi = string.split(fdata2[start + 14], " ")
		local wsp = string.split(fdata2[start + 26], " ")
		local wdr = string.split(fdata2[start + 28], " ")
		day8 = {day = dyt[1], dat = string.gsub(dyt[2], "^.", ""), con = cdn[1], hih = fdata2[start + 2], low = fdata2[start + 3], sri = fdata2[start + 5], sst = fdata2[start + 7], mri = fdata2[start + 9], mst = fdata2[start + 11],uvn = uvi[1], uvt = string.gsub(uvi[2], "[%(%)]", ""), hum = fdata2[start + 16], ppt = fdata2[start + 18], snw = fdata2[start + 20], cld = fdata2[start + 22], mph = fdata2[start + 24], wmh = string.gsub(wsp[1], "[%a]", ""), wkm = string.gsub(wsp[2], "[%a%(,]", ""), wkt = string.gsub(wsp[3], "[%a%)]", ""), wdg = wdr[1], wdi=string.gsub(wdr[2], "[%(%)\n\r]", ""), cd2 = cd2}
-- day9
		local start = start + 29
		local cdn = string.split(fdata2[start + 1], "/")
		if cdn[2] == nil then
			cd2 = ""
		else
			cd2 = "/" .. cdn[2]
		end
		local dyt = string.split(fdata2[start], ",")
		local uvi = string.split(fdata2[start + 14], " ")
		local wsp = string.split(fdata2[start + 26], " ")
		local wdr = string.split(fdata2[start + 28], " ")
		day9 = {day = dyt[1], dat = string.gsub(dyt[2], "^.", ""), con = cdn[1], hih = fdata2[start + 2], low = fdata2[start + 3], sri = fdata2[start + 5], sst = fdata2[start + 7], mri = fdata2[start + 9], mst = fdata2[start + 11], uvn = uvi[1], uvt = string.gsub(uvi[2], "[%(%)]", ""), hum = fdata2[start + 16], ppt = fdata2[start + 18], snw = fdata2[start + 20], cld = fdata2[start + 22], mph = fdata2[start + 24], wmh = string.gsub(wsp[1], "[%a]", ""), wkm = string.gsub(wsp[2], "[%a%(,]", ""), wkt = string.gsub(wsp[3], "[%a%)]", ""), wdg = wdr[1], wdi = string.gsub(wdr[2], "[%(%)\n\r]", ""), cd2 = cd2}
-- day10
		local start = start + 29
		local cdn = string.split(fdata2[start + 1], "/")
		if cdn[2] == nil then
			cd2 = ""
		else
			cd2 = "/" .. cdn[2]
		end
		local dyt = string.split(fdata2[start], ",")
		local uvi = string.split(fdata2[start + 14], " ")
		local wsp = string.split(fdata2[start + 26], " ")
		local wdr = string.split(fdata2[start + 28], " ")
		day10 = {day = dyt[1], dat = string.gsub(dyt[2], "^.", ""), con = cdn[1], hih = fdata2[start + 2], low = fdata2[start + 3], sri = fdata2[start + 5], sst = fdata2[start + 7], mri = fdata2[start + 9], mst = fdata2[start + 11], uvn = uvi[1], uvt = string.gsub(uvi[2], "[%(%)]", ""), hum = fdata2[start + 16], ppt = fdata2[start + 18], snw = fdata2[start + 20], cld = fdata2[start + 22], mph = fdata2[start + 24], wmh = string.gsub(wsp[1], "[%a]", ""), wkm = string.gsub(wsp[2], "[%a%(,]", ""), wkt = string.gsub(wsp[3], "[%a%)]", ""), wdg = wdr[1], wdi = string.gsub(wdr[2], "[%(%)\n\r]", ""), cd2 = cd2}
	end
--------------------------------------------
-- перевод направления ветра на русский язык

	local function wind_dir (wind)

		if wind == "N"			then wind = "северный" end
		if wind == "NNE"		then wind = "северо-северо-восточный" end
		if wind == "NE"			then wind = "северо-восточный" end
		if wind == "ENE"		then wind = "восточно-северо-восточный" end
		if wind == "E"			then wind = "восточный" end
		if wind == "ESE"		then wind = "восточно-юго-восточный" end
		if wind == "SE"			then wind = "юго-восточный" end
		if wind == "SSE"		then wind = "юго-юго-восточный" end
		if wind == "S"			then wind = "южный" end
		if wind == "SSW"		then wind = "юго-юго-западный" end
		if wind == "SW"			then wind = "юго-западный" end
		if wind == "WSW"		then wind = "западный-юго-западный" end
		if wind == "W"			then wind = "западный" end
		if wind == "WNW"		then wind = "западный-северо-западный" end
		if wind == "NW"			then wind = "северо-западный" end
		if wind == "NNW"		then wind = "северо-северо-западный" end
		if wind == "NA"			then wind = "переменный" end
		if wind == "Calm"		then wind = "штиль" end
	return wind
	end	

	local function day_en_rus (day)	-- функция перевода дней недели на русский язык

		if day == "Monday"		then day = "Понедельник" end
		if day == "Tuesday"		then day = "Вторник" end
		if day == "Wednesday"	then day = "Среда" end
		if day == "Thursday"	then day = "Четверг" end
		if day == "Friday"		then day = "Пятница" end
		if day == "Saturday"	then day = "Суббота" end
		if day == "Sunday"		then day = "Воскресенье" end
	return day
	end	

	local function con_en_rus (con)	-- функция перевода состояния погоды

		if con == "AM Snow Showers"			then con = "Утром снегопад" end
		if con == "Blustery"				then con = "Ветрено" end
		if con == "Calm"					then con = "Штиль" end
		if con == "Clear"					then con = "Ясно" end
		if con == "Cloudy"					then con = "Облачно" end
		if con == "Drifting Snow"			then con = "Поземка" end
		if con == "Drizzle"					then con = "Моросящий дождь" end
		if con == "Dust"					then con = "Пыль" end
		if con == "Fair"					then con = "Ясно" end
		if con == "Few Snow Showers"		then con = "Небольшой снегопад" end
		if con == "Fog"						then con = "Густой туман" end
		if con == "Freezing Drizzle"		then con = "Изморозь" end
		if con == "Freezing Rain"			then con = "Ледяной дождь" end
		if con == "Hail"					then con = "Град" end
		if con == "Haze"					then con = "Слабый туман" end
		if con == "Heavy Rain"				then con = "Сильный дождь" end
		if con == "Heavy Snow"				then con = "Сильный снег" end
		if con == "Hot"						then con = "Жарко" end
		if con == "Hurricane"				then con = "Ураган" end
		if con == "Isolated Thunderstorms"	then con = "Временами грозы" end
		if con == "Light Rain"				then con = "Небольшой дождь" end
		if con == "Light Snow"				then con = "Небольшой снег" end
		if con == "Light Snow Showers"		then con = "Сильный снегопад" end
		if con == "Mixed Precipitation"		then con = "Смешанные осадки" end
		if con == "Mixed Rain and Hail"		then con = "Дождь с градом" end
		if con == "Mixed Rain and Sleet"	then con = "Дождь с мокрым снегом" end
		if con == "Mixed Rain and Snow"		then con = "Дождь со снегом" end
		if con == "Mostly Cloudy"			then con = "Переменная облачность" end
		if con == "Mostly Sunny"			then con = "Преимуществеено солнечно" end
		if con == "Overcast"				then con = "Облачно" end
		if con == "Partly Cloudy"			then con = "Переменная облачность" end
		if con == "PM Snow Showers"			then con = "Ночью снегопад" end
		if con == "Rain"					then con = "Дождь" end
		if con == "Scattered Showers"		then con = "Местами грозы" end
		if con == "Scattered Snow Showers"	then con = "Местами снег" end
		if con == "Severe Thunderstorms"	then con = "Сильный дождь" end
		if con == "Scattered Thunderstorms"	then con = "Местами грозы" end
		if con == "Sleet"					then con = "Гололед" end
		if con == "Smoke"					then con = "Туман" end
		if con == "Snow"					then con = "Снег" end
		if con == "Snow Flurries"			then con = "Снегопад" end
		if con == "Snow Showers"			then con = "Снегопад" end
		if con == "Snow Showers Early"		then con = "Утром снегопад" end
		if con == "Snow Showers Late"		then con = "Позднее снег" end
		if con == "Thunderstorms"			then con = "Гроза" end
		if con == "Tornado"					then con = "Торнадо" end
		if con == "Tropical Storm"			then con = "Тропический шторм" end
		if con == "Windy"					then con = "Ветер" end
		
		
	return con
	end	

	local function images (image) -- назначение иконок

		if image == "/40_white/wx_65"	then image = "32.png" end
		if image == "/40_white/wx_66"	then image = "30.png" end
		if image == "/40_white/wx_67"	then image = "26.png" end
		if image == "/40_white/wx_68"	then image = "32.png" end
		if image == "/40_white/wx_69"	then image = "28.png" end
		if image == "/40_white/wx_70"	then image = "20.png" end
		if image == "/40_white/wx_71"	then image = "32.png" end
		if image == "/40_white/wx_72"	then image = "21.png" end
		if image == "/40_white/wx_73"	then image = "05.png" end
		if image == "/40_white/wx_74"	then image = "14.png" end
		if image == "/40_white/wx_75"	then image = "28.png" end
		if image == "/40_white/wx_76"	then image = "18.png" end
		if image == "/40_white/wx_77"	then image = "14.png" end
		if image == "/40_white/wx_78"	then image = "23.png" end
		if image == "/40_white/wx_79"	then image = "05.png" end
		if image == "/40_white/wx_80"	then image = "15.png" end
		if image == "/40_white/wx_81"	then image = "15.png" end
		if image == "/40_white/wx_82"	then image = "11.png" end
		if image == "/40_white/wx_83"	then image = "16.png" end
		if image == "/40_white/wx_84"	then image = "00.png" end
		if image == "/40_white/wx_85"	then image = "32.png" end
		if image == "/40_white/wx_86"	then image = "25.png" end
		if image == "/40_white/wx_87"	then image = "09.png" end
		if image == "/40_white/wx_88"	then image = "05.png" end
		if image == "/40_white/wx_89"	then image = "18.png" end
		if image == "/40_white/wx_90"	then image = "18.png" end
		if image == "/40_white/wx_91"	then image = "39.png" end
		if image == "/40_white/wx_92"	then image = "39.png" end
		if image == "/40_white/wx_93"	then image = "39.png" end
		if image == "/40_white/wx_94"	then image = "39.png" end
		if image == "/40_white/wx_95"	then image = "37.png" end
		if image == "/40_white/wx_96"	then image = "37.png" end
		if image == "/40_white/wx_97"	then image = "31.png" end
		if image == "/40_white/wx_98"	then image = "29.png" end
		if image == "/40_white/wx_99"	then image = "27.png" end
		if image == "/40_white/wx_100"	then image = "47.png" end
		if image == "/40_white/wx_101"	then image = "47.png" end
		if image == "/40_white/wx_102"	then image = "33.png" end
		if image == "/40_white/wx_103"	then image = "26.png" end
		if image == "/40_white/wx_104"	then image = "20.png" end
		if image == "/40_white/wx_105"	then image = "45.png" end
		if image == "/40_white/wx_106"	then image = "45.png" end
		if image == "/40_white/wx_107"	then image = "11.png" end
		if image == "/40_white/wx_108"	then image = "46.png" end
		if image == "/40_white/wx_109"	then image = "46.png" end
		if image == "/40_white/wx_110"	then image = "06.png" end
		if image == "/40_white/wx_111"	then image = "18.png" end
		if image == "/40_white/wx_112"	then image = "06.png" end
		if image == "/40_white/wx_113"	then image = "41.png" end	-- день
		if image == "/40_white/wx_114"	then image = "46.png" end	-- ночь
		if image == "/40_white/wx_115"	then image = "31.png" end
		if image == "/40_white/wx_116"	then image = "47.png" end

	return image
	end
-- ----------------------------------------------------------------
text_weather_settings = {

-- погода

{
text = now.tmp .. " °C",	-- температура
x = 160,
y = 55,
font_size = 22,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = "ощущаемая",
x = 240,
y = 55,
font_size = 14,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = now.flk .. " °C",			-- ощущаемая температура
x = 343,
y = 55,
font_size = 14,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = "Давление" .. "  " .. math.ceil(now.prs*25.4) .. " mm",
x = 160,
y = 75,
font_size = 14,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = "Ветер" .. "  " .. wind_dir(now.wdi) .. "  " .. math.ceil(now.wsp * 0.45)  .. " m/c",
x = 160,
y = 95,
font_size = 14,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = "Влажность" .. "  " .. now.hum .. " %",
x = 160,
y = 115,
font_size = 14,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},


{
text = "Восход " .. day1.sri .. "     " .. "Закат " ..  day1.sst,
x = 160,
y = 135,
font_size = 14,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},
-- прогноз
{
text = "Прогноз погоды на 3 дня",
x = 170,
y = 190,
font_size = 14,
bold = true,
h_align = "c",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = "Сегодня",
x = 15,
y = 220,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = con_en_rus (day1.con) .. ",   вероятность " .. day1.ppt .. " %",
x = 160,
y = 220,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = "Температура днем  " .. day1.hih .. "°C    ночью  " .. day1.low .. "°C",
x = 160,
y = 235,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = "Ветер  " .. wind_dir (day1.wdi) .. "°  " .. math.ceil(day1.wkm / 3.6) .. " m/c",
x = 160,
y = 250,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},
-- 1-й день
{
text = day_en_rus (day2.day),	--"Сегодня ожидается : ",
x = 15,
y = 270,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = con_en_rus (day2.con) .. ",   вероятность " .. day2.ppt .. " %",
x = 160,
y = 270,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = "Температура днем  " .. day2.hih .. "°C    ночью  " .. day2.low .. "°C",
x = 160,
y = 285,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = "Ветер  " .. wind_dir (day2.wdi) .. "°  " .. math.ceil(day2.wkm / 3.6) .. " m/c",
x = 160,
y = 300,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},
-- 2-й день
{
text = day_en_rus (day3.day),
x = 15,
y = 320,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = con_en_rus (day3.con) .. ",   вероятность " .. day3.ppt .. " %",
x = 160,
y = 320,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = "Температура днем  " .. day3.hih .. "°C    ночью  " .. day3.low .. "°C",
x = 160,
y = 335,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = "Ветер  " .. wind_dir (day3.wdi) .. "°  " .. math.ceil(day3.wkm / 3.6) .. " m/c",
x = 160,
y = 350,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},
-- 3-й день
{
text = day_en_rus (day4.day),
x = 15,
y = 370,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = con_en_rus (day4.con) .. ",   вероятность " .. day4.ppt .. " %",
x = 160,
y = 370,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = "Температура днем  " .. day4.hih .. "°C    ночью  " .. day4.low .. "°C",
x = 160,
y = 385,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{
text = "Ветер  " .. wind_dir (day4.wdi) .. "°  " .. math.ceil(day4.wkm / 3.6) .. " m/c",
x = 160,
y = 400,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},

{		-- проверка иконок
text = con_en_rus (now.con),	--weathericons .. images(icondata2[1]),
x = 15,
y = 150,
font_size = 12,
bold = true,
h_align = "l",
colour = {{0, 0x555555, 1},{0.5, 0xcfcfcf, 1},{1, 0x555555, 1}},
orientation="nn",
},
}
-- вывод иконки погоды
weather_settings = {

{				-- сейчас
x = 10,
y = 30,
width = 125,
height = 125,
image = weathericons .. images(icondata2[1]),
},

{				-- сегодня
x = 105,
y = 210,
width = 50,
height = 50,
image = weathericons .. images(icondata2[2]),
},

{				-- 1-й день
x = 105,
y = 260,
width = 50,
height = 50,
image = weathericons .. images(icondata2[3]),
},

{				-- 2-й день
x = 105,
y = 310,
width = 50,
height = 50,
image = weathericons .. images(icondata2[4]),
},

{				-- 3-й день
x = 105,
y = 360,
width = 50,
height = 50,
image = weathericons .. images(icondata2[5]),
},
}

--[[ здесь заканчивается ввод всех данных ]]

	if conky_window == nil then return end
	
	local cs = cairo_xlib_surface_create(conky_window.display, conky_window.drawable, conky_window.visual, conky_window.width, conky_window.height)


-- вывод текста
	for i,v in pairs(text_weather_settings) do
		cr = cairo_create (cs)
		display_text(v)
		cairo_destroy(cr)
	end
	
-- вывод иконки погоды
	for i,v in pairs(weather_settings) do
		cr=cairo_create(cs)
		display_images(v)
		cairo_destroy(cr)
	end	

end--function

-- ------------------------------------------------------------------------------------------------
function string:split(delimiter)
	local result = {}
	local from  = 1
	local delim_from, delim_to = string.find(self, delimiter, from)
	while delim_from do
		table.insert(result, string.sub(self, from , delim_from - 1))
		from = delim_to + 1
		delim_from, delim_to = string.find(self, delimiter, from)
	end
	table.insert(result, string.sub(self, from))
	return result
end
--------------------------------------------------------------------------------
function splitposition(splittab, splitfind, position)
	resulttab = string.split(splittab, splitfind, 1)
	return resulttab[position]
end
