alias rndg="rename 's/\d+/sprintf(\"%03d\", $&)/e'"
alias rnst="rename -v 's/\ /-/g' *"
alias gsm='/home/serii/Documents/git-summary/git-summary'
alias fd='fdfind'
alias xscl='xclip -sel clip'
alias pe='pass edit'
alias ns='npm start'
alias nrs='npm run serve'
alias nrst='npm run start'
alias gcM='git checkout main'
alias gdv='gatsby develop'
alias gdc='gatsby clean'
alias gdb='gatsby build'
alias grdv='gridsome develop'
alias grb='gridsome build'
alias ll='ls -lha'
alias nrd='npm run develop'
alias sgd='sanity graphql deploy'

sanityb() {
curl https://6jc32alz.api.sanity.io/v1/data/export/production/ > "$1.ndjson"
}

mkr() { 
   mkdir -p -- "$1" && touch -- "$1"/"$1.js" "$1"/"$1.module.css"
}

#Neovim
alias n='nvim'
alias nvmi='nvim ~/.config/nvim/init.vim'
alias nvms='nvim ~/.config/nvim/general/settings.vim'
alias nvmp='nvim /home/serii/xubuntu/nvim/vim-plug/plugins.vim'
alias nvmk='nvim /home/serii/xubuntu/nvim/keys/mappings.vim'

export FZF_DEFAULT_COMMAND="find . -path '*/\.*' -type d -prune -o -type f -print -o -type l -print 2> /dev/null | sed s/^..//" 

#go to
alias gst='cd /home/serii/Sites/gatsby-projects/starter-project-gatsby-strapi-portfolio-2020'
alias gjss='cd /home/serii/Sites/jamstack/services/snservices'
alias gservice='cd /home/serii/Sites/jamstack/services/gb-serivces/'
alias grservice='cd /home/serii/Sites/jamstack/services/gr-servizi/'
alias gc='cd /home/serii/Sites/components'
alias gsn='cd /home/serii/Sites/jamstack/services/snservices'
alias gT='cd /home/serii/Projects/tlaravel'
alias gb='cd /home/serii/Sites/base-ecommerce'
alias gv='cd /home/serii/Sites/vue'
alias gp='cd /home/serii/Sites/wp-projects'
alias gS='cd ~/Sites'
alias gr='cd ~/.config/ranger'
alias gt='cd /home/serii/.password-store'
alias gd='cd ~/Downloads'
alias ge='cd /home/serii/Sites/laradock/y-shopper.loc'
alias gB='cd /home/serii/Sites/bs-borgoluce'
alias gh='cd /home/serii/Sites/h-test'
alias gx='cd ~/xubuntu'
alias gD='cd ~/Documents'
alias gk='cd /home/serii/Documents/Knowledge-base'
alias gi='cd /home/serii/Sites/html-idea-gelato'
alias gI='cd /home/serii/Sites/wp-ideagelato/bs-idea'
alias gf='cd /home/serii/Web/my-fonts'
alias gM='cd /home/serii/Sites/bs-maker/assets'
alias gg='cd /home/serii/Sites/gulp'
alias gh='cd /home/serii/Sites/h-test'
alias ge='cd /home/serii/Sites/css-effects.loc'
alias gF='cd /home/serii/Sites/dimmidisi/wp-content/themes/franky'
alias gl='cd ~/Projects/laradock'
alias gL='cd /home/serii/Sites/bs-delisa'
alias gG='cd /home/serii/Sites/bs-gadda'
alias gW='cd /home/serii/Web/wordpress-plugins'
alias gm='cd /home/serii/Sites/modules'

# broser
alias cl='xdg-open https://cloud.mail.ru/home/Web/Sites_Mail/ &'
alias gth='xdg-open https://github.com/seriiserii825?tab=repositories &'
alias gmail='xdg-open https://mail.google.com/mail/u/0/#inbox &'
alias hstl='xdg-open https://panel.hostland.ru/ &'
alias fa='xdg-open https://fontawesome.com/icons?d=gallery &'

#docker
alias drm='docker rm -v $(docker ps -aq -f status=exited)'
alias dcu='docker-compose up -d nginx php-fpm mysql phpmyadmin workspace'
alias sas='sudo service apache2 stop'
alias dcs='docker-compose stop'
alias dcd='docker-compose down'
alias dcw='docker-compose exec --user=laradock workspace bash'
alias dcm='docker-compose exec mysql bash'
alias dcp='docker-compose ps'
#alias dcb='docker-compose exec mysql /usr/bin/mysqldump -u root --password=root tlaravel > tlaravel.sql'
alias dcb='docker-compose exec mysql /usr/bin/mysqldump -uroot -proot tlaravel > tlaravel.sql'

#hugo
alias hs='hugo server'

alias rmf='rm * -rf'

#function
#gitcommit() {
    #git commit -m "$*"
#}

jpg() {
  jpegoptim --strip-all --all-progressive -ptm 75 $1
}

#images
alias jall='jpegoptim --strip-all --all-progressive -ptm 80'
alias j='jpg'
alias op='optipng -strip all'

#get path
alias getp='pwd | xclip -sel clip'
alias fc='xclip -selection clipboard'
alias mg='mogrify -format jpg *.png'
alias mr='mogrify -resize'
alias mgj='mogrify -format png *.jpg'



#programms
alias r='ranger'
alias f='vim -o `fzf`'

#conver
alias webp='find -iname '*.webp' -exec ffmpeg -i {} {}.png \;'
alias png='find -iname "*.png" -exec ffmpeg -i {} {}.jpg \;'

#git commit function
function gcm() {
    git commit -m "$*"
}

pa() {
    pass "$*"
}

pi() {
    pass insert -m "$*"
}

pc() {
    pass -c "$*"
}

function lgit() {
    git add .
    git commit -a -m "$*"
    git push
}

# some more ls aliases

alias rcconf='vim ~/home/serii/xubuntu/ranger/rc.conf'
alias vi3='vim ~/.config/i3/config'
alias vi3l='vim ~/.config/i3/lock.sh'
alias svi3='source ~/.config/i3/config'
alias gs='git status'
alias gad='git add --all'
alias gcM='git checkout master'
alias glg='git log --oneline --graph'
alias gdf='git diff'
alias gca='git add --all && git commit -m "auto" && git push'
alias gph='git push'
alias gpl='git pull'
alias dg='sudo dpkg -i'
alias Install="sudo apt install"
alias Update='sudo apt update'
alias Upgrade='sudo apt upgrade'
alias Search='apt-cache search'
alias Autoremove='sudo apt autoremove'
alias Autoclean='sudo apt autoclean'
alias Purge='sudo apt purge'
alias Search='sudo apt search'
#alias cp="rsync -avz -P"
alias mv="mv -v"
alias la='ls -A'
alias l='ls -CF'
alias o='xdg-open'
alias df='df -h'
alias du='du -h'
alias shn="sudo shutdown -h now"
alias srn="sudo shutdown -r now"
alias out='pastebinit'
alias phpr="sudo systemctl restart apache2"
alias mysqlr="sudo systemctl restart mysql"
alias zshrc="vim ~/.zshrc"
alias vimrc="vim ~/.vimrc"
alias svimrc="source ~/.vimrc"
alias b="vim ~/.bashrc"
alias sb="source ~/.bashrc"
alias ya="yandex"
alias hib="sudo pm-hibernate"
alias gitlog='git log --graph --pretty=oneline --abbrev-commit --all --decorate'
alias lg2="git log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n''          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all"
alias scr="import -window root screenshot.jpg"
alias scrm="import screenshot.jpg"

# THE SIX LINES BELOW are the default prompt and the unset (which were in the original .bashrc)
#if [ "$color_prompt" = yes ]; then
#    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
#else
#    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
#fi
#unset color_prompt force_color_prompt
# ~/.bashrc: executed by bash(1) for non-login shells.

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

#set -o vi
#bind -m vi-insert "\C-l.":clear-screen

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend


bind 'set completion-ignore-case on'

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm|xterm-color|*-256color) color_prompt=yes;;
esac

# uncomment for a colored prompt, if the terminal has the capability; turned
# off by default to not distract the user: the focus in a terminal window
# should be on the output of commands, not on the prompt
#force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
	# We have color support; assume it's compliant with Ecma-48
	# (ISO/IEC-6429). (Lack of such support is extremely rare, and such
	# a case would tend to support setf rather than setaf.)
	color_prompt=yes
    else
	color_prompt=
    fi
fi

if [ "$color_prompt" = yes ]; then
    if [[ ${EUID} == 0 ]] ; then
        PS1='${debian_chroot:+($debian_chroot)}\[\033[01;31m\]\h\[\033[01;34m\] \W \$\[\033[00m\] '
    else
        PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\] \[\033[01;34m\]\w \$\[\033[00m\] '
    fi
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h \w \$ '
fi
unset color_prompt force_color_prompt

# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
    PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h \w\a\]$PS1"
    ;;
*)
    ;;
esac

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# colored GCC warnings and errors
#export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'


#save history interactive
PROMPT_COMMAND='history -a'

#add time 
export HISTTIMEFORMAT="%h %d %H:%M:%S "

#ignore history command
export HISTIGNORE="ls:ll:ps:history"

#control history
export HISTCONTROL=ignorespace:erasedups

export VISUAL=vim
export EDITOR="$VISUAL"

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# Add an "alert" alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

if [ -x /usr/bin/mint-fortune ]; then
     /usr/bin/mint-fortune
fi

export NVM_DIR="/home/serii/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

[ -f ~/.fzf.bash ] && source ~/.fzf.bash


