# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

source /etc/profile

plugins=(git fasd)

# Path to your oh-my-zsh installation.
  export ZSH="/home/serii/.oh-my-zsh"

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
export ZSH_THEME="robbyrussell"
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

alias df='df -h'
alias ll='ls -la'
alias du='du -h'
alias mv='nocorrect mv -i'
alias vimrc='vim ~/.vimrc'
alias zshrc='vim ~/.zshrc'
alias Install='sudo apt install'
alias Update='sudo apt update'
alias Purge='sudo apt purge'
alias Autoremove='sudo apt autoremove'



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
