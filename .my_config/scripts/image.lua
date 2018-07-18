--[[
скрипт забирает изображение погоды из /tmp/weatherimages, преобразует изображение в формат .png и выводит на экран
]]

require "cairo"
require "imlib2"

function conky_draw_image_rect()


image_settings = {
{
x = 50,
y = 450,
width = 50,
height = 50,
image = "/tmp/weatherimages",
},
}

	if conky_window == nil then return end

	if tonumber(conky_parse("$updates"))<3 then return end

	local cs = cairo_xlib_surface_create(conky_window.display, conky_window.drawable, conky_window.visual, conky_window.width, conky_window.height)

	for i,v in pairs(image_settings) do

		cr = cairo_create (cs)
		display_images(v)
		cairo_destroy(cr)
	end
end

function display_images(t)

--if t.draw_me == true then t.draw_me = nil end
--	if t.draw_me ~= nil and conky_parse(tostring(t.draw_me)) ~= "1" then return end	
--	if t.image==nil then return end
--[[
	flag_img = nil

	if t.image ~=nil then
		img_exist = io.open(t.image,"r")
		if img_exist==nil then t.image=nil end
			flag_img=(img_exist==nil)
			io.close()
		end
		
		if t.image ~= nil then
			local image = imlib_load_image(t.image)
			imlib_context_set_image(image)
			w = imlib_image_get_width()
			h = imlib_image_get_height()
			buffer = imlib_create_image(t.width, t.height);	
			imlib_context_set_image(buffer)
	    	imlib_blend_image_onto_image(image, 0, 0, 0, w, h, 0, 0, t.width, t.height)
			imlib_context_set_image(image)
			imlib_free_image()
			imlib_context_set_image(buffer)
			imlib_save_image(t.image .. ".png")
			imlib_free_image()
		end
]]
--		if image == nil then return end		
		
		image = (t.image)
	
-- создаём имидж изображения

	local image_bg = cairo_image_surface_create_from_png (image)

-- забираем данные о ширине и высоте изображения из образа

	local w_image = cairo_image_surface_get_width (image_bg)
	local h_image = cairo_image_surface_get_height (image_bg)

-- т.к. начальная точка, левый верхний угол, вывода изображения находится в левом верхнем углу окна конки, переносим изображение

	cairo_translate (cr, t.x, t.y)

-- масштабтруем изображение

	cairo_scale (cr, t.width/w_image, t.height/h_image)

-- выводим изображение

	cairo_set_source_surface (cr, image_bg, 0, 0)
	cairo_paint (cr)
	cairo_surface_destroy (image_bg)
end	
		
		
		
		
		
		
		
		
		
		
		
