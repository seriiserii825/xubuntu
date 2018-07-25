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
set tabstop=2			 " To match the sample file
set shiftwidth=2
set noexpandtab		 " Use tabs, not spaces
%retab!						 " Retabulate the whole file
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
set t_Co=256

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
inoremap jk <Esc>
noremap <silent> <Space> :silent noh<Bar>echo<CR>
nnoremap		<F2> :<C-U>setlocal lcs=tab:>-,trail:-,eol:$ list! list? <CR>
nnoremap <C-[> <c-w>
nnoremap <C-[><C-[> <c-w><c-w>
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l
cnoremap <expr> %% getcmdtype() == ':' ? expand('%:h').'/' : '%%'

"synastic settings
let g:syntastic_enable_signs=1
let g:syntastic_always_populate_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:airline#extensions#syntastic#enabled = 1
" syntastic error_symbol
	let airline#extensions#syntastic#error_symbol = 'E:'
" syntastic statusline error format (see syntastic_stl_format)
	let airline#extensions#syntastic#stl_format_err = '%E{[%e(#%fe)]}'
" syntastic warning
	let airline#extensions#syntastic#warning_symbol = 'W:'
" syntastic statusline warning format (see syntastic_stl_format)
	let airline#extensions#syntastic#stl_format_warn = '%W{[%w(#%fw)]}'

"indent
set listchars=tab:→\ ,trail:·
"set listchars=tab:▸\ ,eol:¬
set list
let g:syntastic_scss_checkers = ['scss_lint']


set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'Valloric/YouCompleteMe'
Plugin 'tpope/vim-surround'

"indent
"Plugin 'nathanaelkane/vim-indent-guides'

"colorscheme
Plugin'dracula/vim', { 'as': 'dracula'	}
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

"javascript
Plugin 'jelera/vim-javascript-syntax'
Plugin 'pangloss/vim-javascript'


"git
Plugin'airblade/vim-gitgutter'

"search
Plugin'kien/ctrlp.vim'

"comment
Plugin'tpope/vim-commentary'

"staus bar
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
Plugin 'vim-syntastic/syntastic'


call vundle#end()			 " required
filetype plugin indent on		 " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList			- lists configured plugins
" :PluginInstall		- installs plugins; append `!` to update or just
" :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean			- confirms removal of unused plugins; append `!` to
" auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line
