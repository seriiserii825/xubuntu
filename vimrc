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


filetype on
filetype plugin on
"
"Mapping=================
"map <F3> :w!<CR>:w!/home/serii/tmp/vim-markdown.md<CR>:!pandoc -s -f markdown -t html -o /home/serii/tmp/vim-markdown.html /home/serii/tmp/vim-markdown.md<CR>:!google-chrome /home/serii/tmp/vim-markdown.html > /dev/null 2> /dev/null&<CR><CR>

"Vim autosave
let g:auto_save = 1 
let g:auto_save_no_updatetime = 1 
let g:auto_save_in_insert_mode = 0 
let g:auto_save_silent = 0

"vim-multicursor
let g:multi_cursor_select_all_word_key = '<S-n>'

"Snippets setiings ================================
" Trigger configuration. Do not use <tab> if you use https://github.com/Valloric/YouCompleteMe.
let g:UltiSnipsExpandTrigger="<tab>"
let g:UltiSnipsJumpForwardTrigger="<c-b>"
let g:UltiSnipsJumpBackwardTrigger="<c-z>"
" If you want :UltiSnipsEdit to split your window.
let g:UltiSnipsEditSplit="vertical"

"
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
nnoremap <C-[> <c-w>
nnoremap <C-[><C-[> <c-w><c-w>
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l
cnoremap <expr> %% getcmdtype() == ':' ? expand('%:h').'/' : '%%'
nmap <F6> :NERDTreeToggle<CR>


"color settings===================
set t_Co=256
if &term =~ "xterm"
	let &t_Co=256
endif

runtime macros/matchit.vim

"Vundle Plugin====================
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'scrooloose/nerdtree', {'on':	'NERDTreeToggle' }
Plugin 'flazz/vim-colorschemes'
Plugin 'vim-scripts/vim-auto-save'
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
Plugin 'terryma/vim-multiple-cursors'
Plugin 'Valloric/YouCompleteMe'
"Plugin 'SirVer/ultisnips'
"Plugin 'honza/vim-snippets'

"colorscheme
"Plugin'dracula/vim', { 'as': 'dracula'	}
"Plugin 'skielbasa/vim-material-monokai'

"search
"Plugin 'mileszs/ack.vim'
"Plugin 'easymotion/vim-easymotion'

"html
"Plugin 'mattn/emmet-vim', {'for': ['html', 'javascript', 'css']}
"Plugin 'othree/html5.vim',{'for': ['html', 'javascript']}

"css
"Plugin 'ap/vim-css-color',{'for': ['css', 'scss']}
"Plugin 'cakebaker/scss-syntax.vim',{'for': ['css', 'scss']}
"Plugin 'hail2u/vim-css3-syntax',{'for': ['css', 'scss']}

"javascript
"Plugin 'jelera/vim-javascript-syntax'
"Plugin 'pangloss/vim-javascript'
"
"========================================
"
"git
"Plugin 'airblade/vim-gitgutter'
"Plugin 'tpope/vim-fugitive'

"search
"Plugin 'kien/ctrlp.vim'

"comment
"Plugin 'tpope/vim-commentary'
"
"Plugin 'jiangmiao/auto-pairs'
"Plugin 'nathanaelkane/vim-indent-guides'

"Markdown
"Plugin 'suan/vim-instant-markdown', {'rtp': 'after'}
"Plugin 'suan/instant-markdown-d', {'rtp': 'after'}


"staus bar
"Plugin 'scrooloose/syntastic'

"Snippets=======
" Track the engine.

" Snippets are separated from the engine. Add this if you want them:

"snippets
"Plugin 'MarcWeber/vim-addon-mw-utils'
"Plugin 'tomtom/tlib_vim'
"Plugin 'garbas/vim-snipmate'

" Optional:
"Plugin 'honza/vim-snippets'
call vundle#end()			 " required
"Vundle end============================


":imap <C-J> <Plug>snipMateNextOrTrigger

colorscheme gruvbox
