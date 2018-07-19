# Эта настройка установит тему walters для приглашения командной строки
# prompt walters
zstyle ':completion:*' menu select
setopt completealiases
autoload -U compinit && compinit
setopt HIST_IGNORE_DUPS
ttyctl -f

