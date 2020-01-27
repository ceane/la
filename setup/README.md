# Got a new Mac?

Here's the config

## Apps 📱
* 1Password
* [TimeCamp](https://www.timecamp.com/helper/download)
* [Hyper](https://hyper.is)
* [Figma](https://www.figma.com/downloads/)
* [Visual Studio Code](https://code.visualstudio.com)

<details>
 <summary>
  <h2>Terminal</h2>
 </summary>
 
 * brew
   * `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
 * zsh
   * ```
     # locales
     export LANG="en_US.UTF-8"
     export LC_COLLATE="en_US.UTF-8"
      export LC_CTYPE="en_US.UTF-8"
     export LC_MESSAGES="en_US.UTF-8"
     export LC_MONETARY="en_US.UTF-8"
     export LC_NUMERIC="en_US.UTF-8"
     export LC_TIME="en_US.UTF-8"
     export LC_ALL="en_US.UTF-8"
     ```
 * vim
   * `brew install vim`
 * nvm
   * `brew install nvm`
    ```
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
    ```
 * yarn
   `brew install yarn`
 * dotnet
   * [install](https://dotnet.microsoft.com/download)
 * mono
   * `brew install mono`
 * mongo
   * ```
     brew tap mongodb/brew
     brew install mongod
     ```
 * postgres
   * `brew install postgres`
 * git
   * `brew install git`
 * gpg
   * `brew install gpg`
   * `touch gpg-agent.conf`
     ``` // in gpg-agent.conf
     default-cache-ttl 34560000
     max-cache-ttl 34560000
     ```
   * ``` // in .zshrc
     export GPG_TTY=$(tty) # fix gpg
     ```
  * editorconfig
    * `brew install editorconfig`
  * [zeit](https://zeit.co)
</detalis>