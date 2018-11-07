"general settings
set nocompatible
set backspace=indent,eol,start
set history=500
set ruler
set incsearch
set clipboard=unnamedplus
set nu
set hidden
set termencoding=utf-8
set updatetime=0
set wrap
set showmatch
set hlsearch
set wildmenu
set wildmode=full
map :call amv#toggle_spell()

"indent
"set listchars=tab:→\ ,trail:·
"set listchars=tab:▸\ ,eol:¬
"set list
"tabs settings==========================
set tabstop=2			 " To match the sample file
set shiftwidth=2
"set noexpandtab		 " Use tabs, not spaces
"%retab!						 " Retabulate the whole file


"colorscheme================
set background=dark

"map"
inoremap jj <Esc>
noremap <silent> <Space> :silent noh<Bar>echo<CR>
nnoremap <F2> :<C-U>setlocal lcs=tab:>-,trail:-,eol:$ list! list? <CR>
nnoremap <C-[> <c-w>
nnoremap <C-[><C-[> <c-w><c-w>
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l
cnoremap <expr> %% getcmdtype() == ':' ? expand('%:h').'/' : '%%'

nmap <F6> :NERDTreeToggle<CR>

"multicursor===================
"let g:multi_cursor_use_default_mapping=1
" Default mapping
"let g:multi_cursor_select_all_word_key = '<C-S-a>'

"indent guides=====================
"let g:indent_guides_enable_on_vim_startup = 1

"syntax settings======================
if &t_Co > 2 || has("gui_running")
	syntax on
	set hlsearch
endif
"color settings===================
set t_Co=256
if &term =~ "xterm"
	let &t_Co=256
endif

"filetype plugin indent on		
filetype off
runtime macros/matchit.vim

"syntastic===================
"set statusline+=%#warningmsg#
"set statusline+=%{SyntasticStatuslineFlag()}
"set statusline+=%*

"let g:syntastic_always_populate_loc_list = 1
"let g:syntastic_auto_loc_list = 1
"let g:syntastic_check_on_open = 1
"let g:syntastic_check_on_wq = 0
"let g:syntastic_scss_checkers = ['scss_lint']

"easymotion
let g:mapleader=','
map <Leader> <Plug>(easymotion-prefix)


"Vundle Plugin====================
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
"Plugin 'Valloric/YouCompleteMe'
"Plugin 'tpope/vim-surround'

"colorscheme
"Plugin'dracula/vim', { 'as': 'dracula'	}
"Plugin 'skielbasa/vim-material-monokai'
Plugin 'scrooloose/nerdtree', {'on':	'NERDTreeToggle' }
"Plugin 'jiangmiao/auto-pairs'
Plugin 'flazz/vim-colorschemes'
"Plugin 'nathanaelkane/vim-indent-guides'

"search
"Plugin 'mileszs/ack.vim'
"Plugin 'easymotion/vim-easymotion'

"html
"Plugin 'mattn/emmet-vim', {'for': ['html', 'javascript', 'css']}
"Plugin 'othree/html5.vim',{'for': ['html', 'javascript']}
"Plugin 'terryma/vim-multiple-cursors'

"css
"Plugin 'ap/vim-css-color',{'for': ['css', 'scss']}
"Plugin 'cakebaker/scss-syntax.vim',{'for': ['css', 'scss']}
"Plugin 'hail2u/vim-css3-syntax',{'for': ['css', 'scss']}

"javascript
"Plugin 'jelera/vim-javascript-syntax'
"Plugin 'pangloss/vim-javascript'

"git
"Plugin 'airblade/vim-gitgutter'
"Plugin 'tpope/vim-fugitive'

"search
"Plugin 'kien/ctrlp.vim'

"comment
"Plugin 'tpope/vim-commentary'

"staus bar
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
"Plugin 'scrooloose/syntastic'

"snippets
"Plugin 'MarcWeber/vim-addon-mw-utils'
"Plugin 'tomtom/tlib_vim'
"Plugin 'garbas/vim-snipmate'

" Optional:
"Plugin 'honza/vim-snippets'
call vundle#end()			 " required
"Vundle end============================

filetype on
filetype plugin on

":imap <C-J> <Plug>snipMateNextOrTrigger

colorscheme gruvbox
