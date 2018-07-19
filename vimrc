set incsearch
set nocompatible
set backspace=indent,eol,start
set history=500
set ruler
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

set expandtab
set tabstop=2

let g:mapleader=','
                    			
"mappings
map <C-n> :NERDTreeToggle<CR>
map <Leader> <Plug>(easymotion-prefix)

call plug#begin('~/.vim/plugged')

"colorscheme
Plug 'dracula/vim', { 'as': 'dracula'  }
Plug 'scrooloose/nerdtree', {'on':  'NERDTreeToggle' }
Plug 'jiangmiao/auto-pairs'
Plug 'tpope/vim-fugitive'
Plug 'airblade/vim-gitgutter'
Plug 'kien/ctrlp.vim'
Plug 'easymotion/vim-easymotion'


call plug#end()

