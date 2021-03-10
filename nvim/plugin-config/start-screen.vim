let g:startify_bookmarks = [
            \ { 's': '/home/serii/xubuntu/nvim/plugin-config/start-screen.vim' },
            \ { 'p': '/home/serii/xubuntu/nvim/vim-plug/plugins.vim' },
            \ { 'ps': '/home/serii/xubuntu/nvim/snips/php.snippets' },
            \ { 'sns': '/home/serii/Sites/jamstack/services/snservices/sanity.json' },
            \ { 'gs': '/home/serii/Sites/jamstack/services/gb-services/gatsby-config.js' },
            \ { 'b': '/home/serii/Sites/base-ecommerce/front-page.php' },
            \ '~/Sites',
            \ '~/Documents',
            \ '~/Downloads',
            \ ]

let g:startify_lists = [
          \ { 'type': 'sessions',  'header': ['   Sessions']       },
          \ { 'type': 'dir',       'header': ['   Current Directory '. getcwd()] },
          \ { 'type': 'bookmarks', 'header': ['   Bookmarks']      },
          \ ]

