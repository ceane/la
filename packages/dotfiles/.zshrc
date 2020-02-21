# personal
export SHORT_HOST="ceanela"
alias re="echo \"🏓  reloading... 😀\n \" && source ~/.zshrc"
alias reload="re"

alias delete_modules="trash package-lock.json yarn.lock yarn-error.log node_modules"
alias delete_untracked="git clean -fdx"

# locales
export LANG="en_US.UTF-8"
export LC_COLLATE="en_US.UTF-8"
export LC_CTYPE="en_US.UTF-8"
export LC_MESSAGES="en_US.UTF-8"
export LC_MONETARY="en_US.UTF-8"
export LC_NUMERIC="en_US.UTF-8"
export LC_TIME="en_US.UTF-8"
export LC_ALL="en_US.UTF-8"


# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
export UPDATE_ZSH_DAYS=1

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.

# User configuration

# export PATH="/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/dsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

# posgres
# alias startpg='pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start'
# alias stoppg='pg_ctl -D /usr/local/var/postgres stop -s -m fast'
# alias restartpg='stoppost && sleep 1 && startpost'
# alias reloadpg='pg_ctl reload -D /usr/local/var/postgres -s'
# alias statuspg='pg_ctl status -D /usr/local/var/postgres -s'

# redis
# alias autostartredist="ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents"

# git
# configs
export VISUAL="vim"
export EDITOR="$VISUAL"
export TERM="xterm-256color"
export GIT_TEMPLATE_DIR=~/.git-hooks
alias gs="git status"

export GPG_TTY=$(tty) # Fix GPG

# aliases
alias zrc="vim ~/.zshrc"
alias zenv="vim ~/.zshenv"
alias hrc="vim ~/.hyper.js"
alias arc="vim $ZSHA_BASE/.antigenrc"
alias vrc="vim ~/.vimrc"
alias orc="vim ~/.oh-my-zsh/oh-my-zsh.sh"
alias hprc="vim ~/.hyper_plugins/.hyper-sync-settings.json"
alias thef="thefuck"

# the f**k (cli autocorrect)
eval "$(thef --alias)"

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

# fzf (cli history)
fh() {
  print -z $( ([ -n "$ZSH_NAME" ] && fc -l 1 || history) | fzf +s --tac | sed 's/ *[0-9]* *//')
}

# tmux
# optional tmux upon login, tmux for multiple terminal sessions
if command -v tmux>/dev/null; then
#  [[ ! $TERM =~ screen ]] && [ -z $TMUX ] && exec tmux
fi

export NVM_AUTO_USE=true
export NVM_LAZY_LOAD=true

export PATH="/usr/local/bin:${PATH}"
export PATH="$PATH:`yarn global bin`"

# antigen
export ZSHA_BASE="$HOME/.antigen"
source "$ZSHA_BASE/antigen.zsh"
export ANTIGEN_LOG=~/antigen.log
antigen init "$ZSHA_BASE/.antigenrc"
# end antigen
