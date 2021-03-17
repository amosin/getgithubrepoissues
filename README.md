# getgithubrepoissues

This script will return a list of open issues with their URL of a specified Github repo.

Prerequisites:
node (tested on v14.11.0)

Clone repo:

```bash
git clone https://github.com/amosin/getgithubrepoissues
```

Install packages:

```bash
cd getgithubrepoissues
npm i
```

Run Script
node app.js $Organization $Repo

ex:

```bash
node app.js algorand go-algorand
```

Result is a JSON with all the OPEN repo issues with their respective URL

{
'Open Issue title': 'URL'
}
