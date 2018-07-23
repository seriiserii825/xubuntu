set nocompatible
set backspace=indent,eol,start
set history=500
set ruler
set incsearch
"set clipboard=unnamedplus
set nu
set hidden
set termencoding=utf-8
set updatetime=0
set wrap 
set showmatch 
set hlsearch
set shiftwidth=4 softtabstop=4 expandtab
set wildmenu
set wildmode=full
map :call amv#toggle_spell()
imap { {}O
imap [ []
imap ( ()

if &t_Co > 2 || has("gui_running")
    syntax on
    set hlsearch
endif
" Configure 256 colors for xterm mode
if &term =~ "xterm"
  let &t_Co=256
endif
"mv#toggle_spell() WinMovie('l')

"filetype plugin indent on    
filetype off

runtime macros/matchit.vim

let g:mapleader='['

"mappings
map <C-n> :NERDTreeToggle<CR>
"map <Leader> <Plug>(easymotion-prefix)
:inoremap jk <Esc>
:noremap <silent> <Space> :silent noh<Bar>echo<CR>
nnoremap <C-[> <c-w>
nnoremap <C-[><C-[> <c-w><c-w>
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l
cnoremap <expr> %% getcmdtype() == ':' ? expand('%:h').'/' : '%%'

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'Valloric/YouCompleteMe'
Plugin 'tpope/vim-surround'

"colorscheme
Plugin'dracula/vim', { 'as': 'dracula'  }
Plugin'scrooloose/nerdtree', {'on':  'NERDTreeToggle' }
Plugin'jiangmiao/auto-pairs'
Plugin'tpope/vim-fugitive'

"html
Plugin'mattn/emmet-vim', {'for': ['html', 'javascript', 'css']}
Plugin'othree/html5.vim',{'for': ['html', 'javascript']}

"css
Plugin'ap/vim-css-color',{'for': ['css', 'scss']}
Plugin'cakebaker/scss-syntax.vim',{'for': ['css', 'scss']}
Plugin'hail2u/vim-css3-syntax',{'for': ['css', 'scss']}

"git
Plugin'airblade/vim-gitgutter'

"search
Plugin'kien/ctrlp.vim'

"comment
Plugin'tpope/vim-commentary'

call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just
" :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to
" auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line
