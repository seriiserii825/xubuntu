"general settings
  set nocompatible
  set backspace=indent,eol,start
  set history=500
  set ruler
  set nu
  set hidden

"search
  set incsearch
  set hlsearch
  set clipboard=unnamedplus
  set termencoding=utf-8
  set updatetime=0
  set wrap
  set showmatch
  set wildmenu
  set wildmode=full

"tabs settings==========================
  set tabstop=2			 " To match the sample file
  set shiftwidth=2
  set expandtab		 " Use tabs, not spaces
  "%retab!						 " Retabulate the whole file

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
  let g:multi_cursor_start_word_key      = 'gb'
  let g:multi_cursor_select_all_word_key = '<s-n>'
  let g:multi_cursor_start_key           = 'g<C-n>'
  let g:multi_cursor_select_all_key      = 'g<A-n>'
  let g:multi_cursor_next_key            = 'gb'
  let g:multi_cursor_prev_key            = '<C-p>'
  let g:multi_cursor_skip_key            = '<C-x>'
  let g:multi_cursor_quit_key            = '<Esc>'

"Snippets setiings ================================
  let g:UltiSnipsExpandTrigger="<tab>"
  let g:UltiSnipsJumpForwardTrigger="<c-b>"
  let g:UltiSnipsJumpBackwardTrigger="<c-z>"
  let g:UltiSnipsEditSplit="vertical"

"map"
  noremap <F3> :set list!<CR>
  inoremap jj <Esc>
  noremap <silent> <Space> :silent noh<Bar>echo<CR>
  nnoremap <C-[> <c-w>
  nnoremap <C-[><C-[> <c-w><c-w>
  nnoremap <C-h> <C-w>h
  nnoremap <C-j> <C-w>j
  nnoremap <C-k> <C-w>k
  nnoremap <C-l> <C-w>l
  cnoremap <expr> %% getcmdtype() == ':' ? expand('%:h').'/' : '%%'

"Nerdtree
  nmap <C-n> :NERDTreeToggle<CR>


"color settings===================
  set t_Co=256
  if &term =~ "xterm"
    let &t_Co=256
  endif

  runtime macros/matchit.vim

"Vundle Plugin====================
  set rtp+=~/.vim/bundle/Vundle.vim
  call vundle#begin()

" let Vundle manage Vundle, required
  Plugin 'VundleVim/Vundle.vim'

"Nerdtree
  Plugin 'scrooloose/nerdtree', {'on':	'NERDTreeToggle' }

" Colors
  Plugin 'flazz/vim-colorschemes'
  Plugin 'vim-airline/vim-airline'
  Plugin 'vim-airline/vim-airline-themes'

"Settings
  Plugin 'vim-scripts/vim-auto-save'
  Plugin 'terryma/vim-multiple-cursors'

"Snippets
  Plugin 'SirVer/ultisnips'
  Plugin 'honza/vim-snippets'

"Plugin 'Valloric/YouCompleteMe'
  Plugin 'dNitro/vim-pug-complete'
  Plugin 'ctrlp.vim'

"search
Plugin 'mileszs/ack.vim'

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

set background=dark
syntax enable
colorscheme gruvbox
