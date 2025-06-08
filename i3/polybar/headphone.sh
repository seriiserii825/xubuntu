#!/bin/bash

sink=$(pactl get-default-sink)

# Get sink block
sink_info=$(pactl list sinks | awk -v s="$sink" '
  $0 ~ "Sink #" { in_block = 0 }
  $0 ~ "Name: "s { in_block = 1 }
  in_block { print }
')

# Get active port
active_port=$(echo "$sink_info" | awk '/Active Port:/ { print $3 }')

# Show icon + name
if [[ "$active_port" == *"headphone"* ]]; then
    echo " Headphones"
else
    echo " Speakers"
fi
