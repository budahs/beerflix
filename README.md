# BeerFlix

## Description

```
Project to obtain data from api based on webpack.
```

## Test API

the API we 

```
https://web-bootcamp-exercise-beer-swagger-pgjtqotgtl.now.sh/api-docs/
```

# First steps
## Installation
```
npm i 
```
## Package fixing for production deployment of tag picture with srcset
```
[1] After installing edit /node_modules/html-loader/index.js change line 29 (or similar) from:
-----------------------------------------------
var attributes = ["img:src"];
-----------------------------------------------
To:
-----------------------------------------------
var attributes = ["img:src","source:srcset"];
-----------------------------------------------
[2] Use of srcset need to be individual for this fix to work (example below)

<source srcset="../images/beerflix.jpg" media="(min-width: 1280px)">
<source srcset="../images/beerflix-hires.jpg" media="(min-width: 1024px)">
<source srcset="../images/beerflix-tablet.jpg" media="(min-width: 780px)">
<source srcset="../images/beerflix-500.jpg" media="(min-width: 480px)">
```
## Environments
[1] Environment with development server.
```
npm start
```
[2] Sets in dist static version of the site for deployment.
```
npm run prod
```
## Main features
### Index.html

- Listing of 10 items retrieved from API.
- Ability to search results by date or text or both.

### detail.html

- Lists product data.
- Ability add comments with live showing of the inserted comment.
- (not implemented) Possibility to add likes.

## Configuration files

- `package.json` for Node project.
- `.gitignore` for repository excluded files.
- `webpack.config.js` development settings.
- `webpack.production.js` production settings.
- `.babelrc` Babel Settings.
- `postcss.config.js` Post css prefixer.

## Additional notes
Production site emulation 
```
npm run prod
http-server ./dist
```
Ensure http-server is installed either locally or globally
```
npm i -D http-server
npm i -g http-server
```