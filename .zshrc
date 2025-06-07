#pyscripts Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi
bindkey -M vicmd 'k' history-substring-search-up
bindkey -M vicmd 'j' history-substring-search-down
setopt NULL_GLOB
set -o vi
export BAT_THEME="OneHalfDark"
export PATH=~/Documents/bash-apps:$PATH
export PATH=~/Documents/bash/bash-scripts:$PATH
export PATH=~/Documents/bash/bash-git:$PATH
export PATH=~/Documents/bash-private/dist:$PATH
export PATH=~/Documents/bash/bash-wp:$PATH
export PATH=~/Documents/bash-arch:$PATH
export PATH=~/Documents/bash:$PATH
# export PATH=~/Documents/bash/bash-scripts/bash-git:$PATH
export PATH=~/.config/vifm:$PATH
export ZSH="/home/serii/.oh-my-zsh"
export PATH;
# alias scraping="/home/serii/Documents/python/py-parsing/venv/bin/python3 /home/serii/Documents/python/py-parsing/scrapping.py"
alias clear_downloads="rm -rf ~/Downloads/* && rm -rf ~/Downloads/.*"

# source ~/Documents/bash/bash-git/lf.sh
source ~/Documents/bash/bash-scripts/n.sh
source ~/xubuntu/scripts/docker.sh

# ZSH_AUTOSUGGEST_ACCEPT_WIDGETS=("${(@)ZSH_AUTOSUGGEST_ACCEPT_WIDGETS:#forward-char}")
# bindkey '$' autosuggest-accept

export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"

plugins=(zsh-z npm zsh-autosuggestions zsh-syntax-highlighting you-should-use copybuffer sudo colored-man-pages vi-mode extract)


set ZSH_HIGHLIGHT_MAXLENGTH=100
ZSH_THEME="powerlevel10k/powerlevel10k"

# alias disable_touchpad="xinput disable 'ETPS/2 Elantech Touchpad' "

# plugins
# source ~/zsh-autocomplete/zsh-autocomplete.plugin.zsh
# source ~/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
# source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
# colors
source ~/xubuntu/zsh_modules/zsh_colors

source ~/xubuntu/zsh_modules/zsh_python
source ~/xubuntu/zsh_modules/zsh_pnpm
source ~/xubuntu/zsh_modules/zsh_apt
source ~/xubuntu/zsh_modules/zsh_bun
source ~/xubuntu/zsh_modules/zsh_node
source ~/xubuntu/zsh_modules/zsh_git
source ~/xubuntu/zsh_modules/zsh_go
source ~/xubuntu/zsh_modules/zsh_xclip
source ~/xubuntu/zsh_modules/zsh_pass
source ~/xubuntu/zsh_modules/zsh_fzf
source ~/xubuntu/zsh_modules/zsh_ffmpeg
source ~/xubuntu/zsh_modules/zsh_mount
source ~/xubuntu/zsh_modules/zsh_mogrify
source ~/xubuntu/zsh_modules/zsh_dc_docker
source ~/xubuntu/zsh_modules/zsh_dunst

source $ZSH/oh-my-zsh.sh

export NVM_DIR="/home/serii/.config/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# zsh-z
autoload -U compinit; compinit
zstyle ':completion:*' menu select

source ~/xubuntu/zsh_modules/zsh_aliases
source ~/xubuntu/zsh_modules/zsh_globals

export VISUAL=nvim
export EDITOR="$VISUAL"

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

typeset -g POWERLEVEL9K_INSTANT_PROMPT=off

#ZSH_AUTOSUGGEST_ACCEPT_WIDGETS[$ZSH_AUTOSUGGEST_ACCEPT_WIDGETS[(i)forward-char]]=()
bindkey '^J' autosuggest-execute
# bindkey '^P' autosuggest-accept

# Created by `pipx` on 2024-10-28 17:31:58
export PATH="$PATH:/home/serii/.local/bin"


# pnpm
export PNPM_HOME="/home/serii/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

. "$HOME/.atuin/bin/env"

eval "$(atuin init zsh)"

function y() {
	local tmp="$(mktemp -t "yazi-cwd.XXXXXX")" cwd
	yazi "$@" --cwd-file="$tmp"
	if cwd="$(command cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
		builtin cd -- "$cwd"
	fi
	rm -f -- "$tmp"
}


