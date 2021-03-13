let g:startify_bookmarks = [
            \ { 'c': '~/.config/i3/config' },
            \ { 'i': '~/.config/nvim/init.vim' },
            \ { 's': '~/.config/nvim/plugin-config/start-screen.vim' },
            \ { 'gs': '~/Sites/jamstack/services/gb-serivces/src/components/' },
            \ { 'sns': '/home/serii/Sites/jamstack/services/snservices/' },
            \ ]

let g:startify_lists = [
          \ { 'type': 'files',     'header': ['   Files']            },
          \ { 'type': 'dir',       'header': ['   Current Directory '. getcwd()] },
          \ { 'type': 'sessions',  'header': ['   Sessions']       },
          \ { 'type': 'bookmarks', 'header': ['   Bookmarks']      },
          \ ]


