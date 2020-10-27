# bitbucket-fixversions
A Tampermonkey user script that displays fix versions of linked Jira issues right in the pull request title

## Installation
1. Install [Tampermonkey](https://www.tampermonkey.net/) extension for your browser.
2. Open the [latest version](https://github.com/vadimbelyaev/bitbucket-fixversions/raw/main/bitbucket-fixversions.user.js) of the script in the browser.
3. Tampermonkey will offer to install the script. Agree and click Install.
4. Done!

## Usage
1. Open any Bitbucket pull request in the browser
2. If the pull request title contains any Jira issue keys and the Bitbucket instance has the Jira integration enabled, the script will automatically load and display each issue's Fix Versions right near each issue key.

