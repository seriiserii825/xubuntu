
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH
export PATH="$HOME/.node/bin:$PATH"

# Path to your oh-my-zsh installation.
export ZSH="/home/serii/.oh-my-zsh"

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="robbyrussell"

plugins=(
		git
		fasd
		sudo
		web-search
		history-substring-search
		)

source $ZSH/oh-my-zsh.sh

#bindkey -v
#bindkey -M vicmd 'k' history-substring-search-up
#bindkey -M vicmd 'j' history-substring-search-down
#Ctrl+←, 
#bindkey "^R" history-substring-search-backward 
# Ctrl+→
#bindkey "^[OC" end-of-line
# If not running interactively, don't do anything
case $- in
*i*) ;;
*) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

#save history interactive
PROMPT_COMMAND='history -a'

#add time 
export HISTTIMEFORMAT="%h %d %H:%M:%S "

#ignore history command
export HISTIGNORE="ls:ll:ps:history"

#control history
export HISTCONTROL=ignorespace:erasedups

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# some more ls aliases
alias Install="sudo apt install"
alias Update='sudo apt update'
alias Upgrade='sudo apt upgrade'
alias Search='apt-cache search'
alias Autoremove='sudo apt autoremove'
alias Autoclean='sudo apt autoclean'
alias Purge='sudo apt remove –purge'
alias Search='sudo apt search'
alias cp="rsync -avz -P"
alias mv="mv -v"
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias o='xdg-open'
alias df='df -h'
alias du='du -h'
alias shn="sudo shutdown -h now"
alias srn="sudo shutdown -r now"
alias out='pastebinit'
alias phpr="sudo /etc/init.d/apache2 restart"
alias mysqlr="sudo systemctl restart mysql"
alias zshrc="vim ~/.zshrc"
alias vimrc="vim ~/.vimrc"
alias ya="yandex"



export NVM_DIR="/home/serii/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
