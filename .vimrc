"general settings
  set nocompatible
  set backspace=indent,eol,start
  set history=500
  set ruler
  set nu
  set hidden
  set path+=**
  syntax enable
  set complete+=kspell
  set completeopt=menuone,longest
  set shortmess+=c
  set foldmethod=indent
  set foldnestmax=10
  set nofoldenable
  set foldlevel=2
  set relativenumber
augroup every
  autocmd!
  au InsertEnter * set number
  au InsertLeave * set relativenumber
augroup END

inoremap <Tab> <C-R>=Tab_Or_Complete()<CR>
set dictionary=/home/serii/xubuntu/words.txt

nmap b S

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
set tabstop=2
set shiftwidth=2
set expandtab
 
filetype on
filetype plugin on
set omnifunc=syntaxcomplete#Complete
"
"Leader=================
let g:mapleader = ','

let $FZF_DEFAULT_COMMAND = 'ag --hidden --ignore .git -g ""'

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
  let g:UltiSnipsExpandTrigger="<C-j>"
  let g:UltiSnipsJumpForwardTrigger="<C-b>"
  let g:UltiSnipsJumpBackwardTrigger="<C-z>"
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
  Plugin 'justinmk/vim-sneak'

"Nerdtree
  Plugin 'scrooloose/nerdtree', {'on':  'NERDTreeToggle' }
"Fzf
  Plugin 'junegunn/fzf.vim'
  Plugin 'junegunn/fzf', { 'do': { -> fzf#install() } }

"Indentation
 Plugin '2072/PHP-Indenting-for-VIm'

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

"Code
  Plugin 'jiangmiao/auto-pairs'

Plugin 'alvan/vim-closetag'

"Autocomplete
  Plugin 'vim-scripts/AutoComplPop'

"html
Plugin 'mattn/emmet-vim', {'for': ['html', 'javascript', 'css']}
Plugin 'othree/html5.vim',{'for': ['html', 'javascript']}

"css
Plugin 'ap/vim-css-color',{'for': ['css', 'scss']}
Plugin 'cakebaker/scss-syntax.vim',{'for': ['css', 'scss']}
Plugin 'tpope/vim-commentary'

"javascript
Plugin 'jelera/vim-javascript-syntax'
Plugin 'pangloss/vim-javascript'

" post install (yarn install | npm install) then load plugin only for editing supported files
Plugin 'prettier/vim-prettier', { 'do': 'yarn install' }
Plugin 'nathanaelkane/vim-indent-guides'

call vundle#end()      " required
"Vundle end============================

set background=dark
colorscheme gruvbox
"hi Normal guibg=NONE ctermbg=NONE
