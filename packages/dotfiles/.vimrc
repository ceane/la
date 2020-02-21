set hidden " vim-ctrlspace requires this

call plug#begin('~/.vim/plugged/')

" Plugins
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'flazz/vim-colorschemes'
Plug 'dikiaap/minimalist'
Plug 'editorconfig/editorconfig-vim'
Plug 'w0rp/ale'
Plug 'vim-syntastic/syntastic', {
 \ 'for': 'fsharp',
 \ }
Plug 'AndrewRadev/splitjoin.vim'
Plug 'Valloric/YouCompleteMe', { 'do': './install.py' }
Plug 'scrooloose/nerdtree'
Plug 'tpope/vim-fugitive' " Gdiff, Gblame, etc
Plug 'mattn/webapi-vim'
Plug 'mattn/gist-vim'
Plug 'mhinz/vim-signify' " VC Diffs
" Plug 'mmozuras/vim-github-comment', { 'lazy': 1 }
Plug 'Xuyuanp/nerdtree-git-plugin'
Plug 'vim-ctrlspace/vim-ctrlspace'
Plug 'godlygeek/tabular'
Plug 'ervandew/supertab'
Plug 'junegunn/fzf', { 'build': './install --all' }
Plug 'junegunn/fzf.vim'
Plug 'kopischke/vim-fetch'
Plug 'Yggdroot/indentLine'
Plug 'tpope/vim-abolish', { 'lazy': 1 } " Search, abbrev and replace word variants
Plug 'chiedo/vim-sort-blocks-by' " SortBlocksBy case/switch
Plug 'tpope/vim-surround'
Plug 'AndrewRadev/splitjoin.vim'
Plug 'terryma/vim-multiple-cursors'
Plug 'bronson/vim-trailing-whitespace'
Plug 'terryma/vim-expand-region', { 'lazy': 1 }
Plug 'zweifisch/pipe2eval', { 'lazy': 1 }
Plug 'ludovicchabant/vim-lawrencium', { 'lazy': 1 }
Plug 'alvan/vim-closetag'
Plug 'fsharp/vim-fsharp', {
 \ 'for': 'fsharp',
 \ 'do': 'make fsautocomplete',
 \ }
" Plug 'ternjs/tern_for_vim', { 'on_ft': ['javascript', 'jsx'] }
Plug 'moll/vim-node'
Plug 'pangloss/vim-javascript'
Plug 'MaxMEllon/vim-jsx-pretty'
" Plug 'ruanyl/vim-fixmyjs'
" Code formatting
Plug 'ruanyl/vim-fixmyjs'
Plug 'prettier/vim-prettier', {
	\ 'do': 'yarn install',
	\ 'for': ['javascript', 'typescript', 'css', 'less', 'scss', 'json', 'graphql'] }
Plug 'facebook/vim-flow', { 'lazy': 1 }
Plug 'JulesWang/css.vim'
Plug 'ap/vim-css-color'
Plug 'cakebaker/scss-syntax.vim'
Plug 'groenewege/vim-less'
Plug 'rhysd/vim-gfm-syntax'
" Plug 'plasticboy/vim-markdown'
Plug 'ekalinin/Dockerfile.vim'
Plug 'kballard/vim-swift', {
 \ 'for': 'swift',
 \ 'unite_sources': ['swift/device', 'swift/developer_dir']
 \ }
Plug 'slim-template/vim-slim'
Plug 'tomlion/vim-solidity', { 'lazy': 1 }

call plug#end()

set rtp+=~/.fzf
set t_Co=256
set termguicolors
set background=dark
set fillchars+=stl:\ ,stlnc:\
set fileencodings=utf-8
set encoding=utf-8
set termencoding=utf-8
set backspace=indent,eol,start
set tabstop=2
set shiftwidth=2
set expandtab
" enable vim-airline
set laststatus=2
" To prevent vim-airline placeholder from rendering in hyper term
set t_RV=
set scrolloff=8
" set conceallevel=2
set mousefocus
set showcmd
set clipboard=unnamedplus
" -- performance / buffer --
set lazyredraw
set ttyfast
set paste " auto indent paste

syn match Terms contained "\<\(NOTE\|FIXME\):"

" Background must remain black!
hi Normal guibg=Black
hi NonText guibg=Black
hi Todo guifg=Orange term=underline
hi def link Terms Todo

let g:indentLine_color_gui = '#434343'

" Ale syntax settings
let g:ale_linters = {
\  'javascript': ['eslint'],
\}
let g:ale_javascript_eslint_use_global = 1
let g:ale_javascript_eslint_executable = 'eslint'

let g:ale_sign_error = '>>'
let g:ale_sign_warning = '--'

let g:airline#extensions#ale#enabled = 1
let g:ale_sign_column_always = 1
let g:airline#extensions#ale#enabled = 1
" let g:ale_lint_on_text_changed = 'normal'

let g:airline_powerline_fonts=1
let g:airline_theme='light'

" syntastic remove when ale is supported
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0


let g:fsharp_completion_helptext = 1

" let g:vim_markdown_folding_disabled = 1
"
let g:closetag_filenames = "*.html,*.js,*.jsx"

let g:gfm_syntax_emoji_conceal=1
let g:gfm_syntax_enable_filetypes=['markdown', 'fsharp']
let g:markdown_fenced_languages=['javascript']

let g:vim_jsx_pretty_colorful_config = 1
" :frustre: much
hi def link jsxCloseTag Function
hi def link jsxCloseString Function
hi jsBraces guifg=#ff7d7a
hi Pmenu guifg=#ffffff guibg=#3e3e3e

" Change color of color column past a certain range
"let &colorcolumn=join(range(81,999),",") " color screen past boundary
let g:EditorConfig_max_line_indicator='fill'
let g:EditorConfig_core_mode='external_command'
hi ColorColumn guibg=#0e0e0e

" NERDTree autostarts if buffer larger than 90 chars
if winwidth('%') > 90
  autocmd VimEnter * if argc() == 1 && !exists('g:isReadingFromStdin') | NERDTree | wincmd p | endif
endif

" Auto start nerdtree when openining directory
autocmd StdinReadPre * let s:std_in=1
" Place cursor in original buffer on auto open
autocmd VimEnter * if argc() == 1 && isdirectory(argv()[0]) && !exists("s:std_in") | exe 'NERDTree' argv()[0] | wincmd p | ene | endif

" Close out vim when main buffer closes
if !has("gui_running")
  autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
endif

au BufWritePre *.js :Fixmyjs
au BufWritePre *.jsx :Fixmyjs

" Syntax
autocmd BufNewFile,BufReadPost *.md set filetype=markdown
au BufRead,BufNewFile *.json,.eslintrc,.babelrc set filetype=json
au BufRead,BufNewFile *.fs,.fsi,.fsx,.fsharp set filetype=fsharp
" au Filetype javascript call SetPathSyntasticJSCheckers(['eslint'])
autocmd FileType fsharp setlocal omnifunc=syntaxcomplete#Complete
autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS
autocmd FileType css setlocal omnifunc=csscomplete#CompleteCSS
autocmd FileType html,markdown setlocal omnifunc=htmlcomplete#CompleteTags
autocmd FileType python setlocal omnifunc=pythoncomplete#Complete
autocmd FileType xml setlocal omnifunc=xmlcomplete#CompleteTags
au FileType json setl conceallevel=0

if version >= 700
  autocmd FileType html,markdown,slim,erb setlocal spell spelllang=en_us
  set spl=en spell
  set nospell
endif

" Swap comma list items
" gh left swap, gl right swap
nnoremap <silent> gl "_yiw:s/\(\%#\w\+\)\(\_W\+\)\(\w\+\)/\3\2\1/<CR><c-o>/\w\+\_W\+<CR><c-l>
nnoremap <silent> gh "_yiw?\w\+\_W\+\%#<CR>:s/\(\%#\w\+\)\(\_W\+\)\(\w\+\)/\3\2\1/<CR><c-o><c-l>
