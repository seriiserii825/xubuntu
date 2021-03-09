let g:startify_bookmarks = [
            \ { 's': '/home/serii/xubuntu/nvim/plugin-config/start-screen.vim' },
            \ { 'p': '/home/serii/xubuntu/nvim/vim-plug/plugins.vim' },
            \ { 'ps': '/home/serii/xubuntu/nvim/snips/php.snippets' },
            \ { 'i': '~/.config/nvim/init.vim' },
            \ { 'st': '/home/serii/Sites/start-template.loc/src/pug/pages/index.pug' },
            \ { 'b': '/home/serii/Sites/base-ecommerce/front-page.php' },
            \ { 'f': '/home/serii/Sites/wp-fictional-univesity/front-page.php' },
            \ '~/Sites',
            \ '~/Documents',
            \ '~/Downloads',
            \ ]

let g:startify_lists = [
          \ { 'type': 'sessions',  'header': ['   Sessions']       },
          \ { 'type': 'dir',       'header': ['   Current Directory '. getcwd()] },
          \ { 'type': 'bookmarks', 'header': ['   Bookmarks']      },
          \ ]

