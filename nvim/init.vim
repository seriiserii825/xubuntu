if has('python')
  set pyx=2
elseif has('python3')
  set pyx=3
endif

source $HOME/.config/nvim/vim-plug/plugins.vim
source $HOME/.config/nvim/general/settings.vim
source $HOME/.config/nvim/keys/mappings.vim
source $HOME/.config/nvim/themes/onedark.vim
source $HOME/.config/nvim/plugin-config/coc.vim
source $HOME/.config/nvim/plugin-config/rnvimr.vim
source $HOME/.config/nvim/plugin-config/fzf.vim
source $HOME/.config/nvim/plugin-config/start-screen.vim
source $HOME/.config/nvim/plugin-config/rainbow.vim
source $HOME/.config/nvim/plugin-config/signify.vim
source $HOME/.config/nvim/plugin-config/sneak.vim
source $HOME/.config/nvim/themes/airline.vim
source $HOME/.config/nvim/themes/airline.vim
source $HOME/.config/nvim/keys/which-key.vim
source $HOME/.config/nvim/plugin-config/floaterm.vim
source $HOME/.config/nvim/plugin-config/autosave.vim
lua require'plug-colorizer'

