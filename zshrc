# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

plugins=(git fasd)

# Path to your oh-my-zsh installation.
  export ZSH="/home/serii/.oh-my-zsh"

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
export ZSH_THEME="random"

bindkey -v

umask 022

# Позволяем разворачивать сокращенный ввод, к примеру cd /u/sh в /usr/share 
autoload -U compinit && compinit

# файл истории команд 
HISTFILE=~/.zhistory

# Число команд, сохраняемых в HISTFILE 
SAVEHIST=5000

setopt MENUCOMPLETE

# Дополнение файла истории 
 setopt  APPEND_HISTORY
#
# # Игнорировать все повторения команд 
 setopt  HIST_IGNORE_ALL_DUPS
#
# # Игнорировать лишние пробелы 
 setopt  HIST_IGNORE_SPACE
#
# # не пищать при дополнении или ошибках 
 setopt NO_BEEP
#
# # если набрали путь к директории без комманды CD, то перейти 
 setopt AUTO_CD

# исправлять неверно набранные комманды 
 setopt CORRECT_ALL

alias Install="sudo apt-get install"
alias Update='sudo apt-get update'
alias Upgrade='sudo apt-get upgrade'
alias Search='apt-cache search'
alias Autoremove='sudo apt-get autoremove'
alias Autoclean='sudo apt-get autoclean'
alias Purge='sudo apt-get remove –purge'
alias cp="cp -v"
alias mv="mv -v"
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias o='xdg-open'
alias df='df -h'
alias du='du -h'
alias shn="sudo shutdown -h now"
alias srn="sudo reboot"
alias out='pastebinit'
alias phpr="sudo /etc/init.d/apache2 restart"
alias mysqlr="sudo systemctl restart mysql"
alias zshrc='vim ~/.zshrc'
alias vimrc='vim ~/.vimrc'


# Completions 
zstyle ':completion:*::::' completer _expand _complete _ignored _approximate
zstyle -e ':completion:*:approximate:*' max-errors 'reply=( $(( ($#PREFIX+$#SUFFIX)/3  )) numeric  )'
zstyle ':completion:*:expand:*' tag-order all-expansions
zstyle ':completion:*' verbose yes
zstyle ':completion:*:descriptions' format '%B%d%b'
zstyle ':completion:*:messages' format '%d'
zstyle ':completion:*:warnings' format 'No matches for: %d'
zstyle ':completion:*:corrections' format '%B%d (errors: %e)%b'
zstyle ':completion:*' group-name ''
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Z}'
zstyle ':completion:*:*:-subscript-:*' tag-order indexes parameters
zstyle ':completion:*:*:(^rm):*:*files' ignored-patterns '*?.o' '*?.c~''*?.old' '*?.pro'
zstyle ':completion:*:functions' ignored-patterns '_*'

export NVM_DIR="/home/serii/.nvm"
[ -s "$NVM_DIR/nvm.sh"  ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
