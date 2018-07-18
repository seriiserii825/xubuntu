#!/bin/bash

killall conky

sleep 2
conky -c /home/serii/.my_config/configs/common_config 2>&1 > /dev/null &
conky -c /home/serii/.my_config/configs/clock_ring 2>&1 > /dev/null &
conky -c /home/serii/.my_config/configs/clock 2>&1 > /dev/null &
conky -c /home/serii/.my_config/configs/calendar 2>&1 > /dev/null &
conky -c /home/serii/.my_config/configs/weather 2>&1 > /dev/null &
exit


