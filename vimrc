set incsearch
set nocompatible
set backspace=indent,eol,start
set autoindent
   set history=50
set ruler
set showcmd
set incsearch

if &t_Co > 2 || has("gui_running")
  syntax on
    set hlsearch
    endif

filetype plugin indent on    

autocmd FileType text setlocal textwidth=78

set ic
set nu
set hidden
set termencoding=utf-8
set updatetime=0
map :call amv#toggle_spell()
imap { {}O
imap [ []
imap ( ()
set wrap 
set showmatch 
set hlsearch
set incsearch
set ignorecase
 :noremap <silent> <Space> :silent noh<Bar>echo<CR> 
