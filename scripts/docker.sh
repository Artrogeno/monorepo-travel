#!/bin/bash

# Action
run_on_win() {
  docker-compose stop

  docker-compose build

  docker-compose up -d

  docker-compose start
}

run_linux_or_mac() {
  sudo docker-compose stop

  sudo docker-compose build

  sudo docker-compose up -d

  sudo docker-compose start
}

if [[ "$OSTYPE" == "linux-gnu" ]]; then
  run_linux_or_mac
  # echo "Linux"

elif [[ "$OSTYPE" == "darwin"* ]]; then
  run_linux_or_mac
  # echo "Mac OSX"

elif [[ "$OSTYPE" == "cygwin" ]]; then
  run_on_win
  # echo "POSIX compatibility layer and Linux environment emulation for Windows"

elif [[ "$OSTYPE" == "msys" ]]; then
  run_on_win
  # echo "Lightweight shell and GNU utilities compiled for Windows (part of MinGW)"

elif [[ "$OSTYPE" == "win32" ]]; then
  run_on_win
  # echo "I'm not sure this can happen."
elif [[ "$OSTYPE" == "freebsd"* ]]; then
  run_linux_or_mac
  # echo "freebsd"      # ...
else
  echo "Unknown."
fi