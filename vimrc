<<<<<<< HEAD
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
=======
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
"Leader=================
let g:mapleader = ','

"Remove end of line
nnoremap <silent> <F5> :let _s=@/<Bar>:%s/\s\+$//e<Bar>:let @/=_s<Bar>:nohl<CR>

"Markdown
map <F2> :w!<CR>:w!/home/serii/tmp/vim-markdown.md<CR>:!pandoc -s -f markdown -t html -o /home/serii/tmp/vim-markdown.html /home/serii/tmp/vim-markdown.md<CR>:!google-chrome /home/serii/tmp/vim-markdown.html > /dev/null 2> /dev/null&<CR><CR>

"Easymotion
map  <Leader>f <Plug>(easymotion-bd-f)
nmap <Leader>f <Plug>(easymotion-overwin-f)

" s{char}{char} to move to {char}{char}
"nmap s <Plug>(easymotion-overwin-f2)

" Move to line
map <Leader>L <Plug>(easymotion-bd-jk)
nmap <Leader>L <Plug>(easymotion-overwin-line)

" Move to word
"map  <Leader>w <Plug>(easymotion-bd-w)
"nmap <Leader>w <Plug>(easymotion-overwin-w)

"Windows
map <silent> <C-h> :call WinMove('h')<CR>
map <silent> <C-j> :call WinMove('j')<CR>
map <silent> <C-k> :call WinMove('k')<CR>
map <silent> <C-l> :call WinMove('l')<CR>

function! WinMove(key)
  let t:curwin = winnr()
  exec "wincmd ".a:key
  if (t:curwin == winnr())
    if (match(a:key,'[jk]'))
      wincmd v
    else
      wincmd s
    endif
    exec "wincmd ".a:key
  endif
endfunction


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
  let g:UltiSnipsExpandTrigger="<c-j>"
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


"Plugin 'jiangmiao/auto-pairs'
let g:AutoPairsFlyMode = 1
let g:AutoPairsShortcutBackInsert = '<M-b>'


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
"Plugin 'vim-scripts/vim-auto-save'
  Plugin 'terryma/vim-multiple-cursors'

"Snippets
  Plugin 'SirVer/ultisnips'
  Plugin 'honza/vim-snippets'

"Complete
  Plugin 'Valloric/YouCompleteMe'
  Plugin 'dNitro/vim-pug-complete'
  Plugin 'ctrlp.vim'

"search
  Plugin 'mileszs/ack.vim'

"Code
  Plugin 'jiangmiao/auto-pairs'

"Git
  Plugin 'tpope/vim-fugitive'
  Plugin 'airblade/vim-gitgutter'

"Motion
  Plugin 'easymotion/vim-easymotion'

"html
  Plugin 'mattn/emmet-vim', {'for': ['html', 'javascript', 'css']}
"Plugin 'othree/html5.vim',{'for': ['html', 'javascript']}

"css
"Plugin 'ap/vim-css-color',{'for': ['css', 'scss']}
"Plugin 'cakebaker/scss-syntax.vim',{'for': ['css', 'scss']}
"Plugin 'hail2u/vim-css3-syntax',{'for': ['css', 'scss']}

"javascript
"Plugin 'jelera/vim-javascript-syntax'
"Plugin 'pangloss/vim-javascript'

"comment
"Plugin 'tpope/vim-commentary'
"
"Plugin 'nathanaelkane/vim-indent-guides'

"staus bar
"Plugin 'scrooloose/syntastic'


call vundle#end()			 " required
"Vundle end============================

set background=dark
syntax enable
colorscheme gruvbox
"hi Normal guibg=NONE ctermbg=NONE
>>>>>>> ac4314ded3b97c7035959ddfeb7958931d56f2fe
