## Fun Autocomplete
This challenge gauges your creativeness and ability to code elegant Javascript solutions. Please code your solution as if it were for production, meaning use sane spacing and indentation, comments when necessary, ES6 syntax, and best practices for web.

## Instructions
1. Install development dependencies by running `npm install` and `bundle install` from this directory.
2. Fill in the implementation of the `autocomplete` module (`autocomplete/index.js`). After setting up the development environment as described below, you'll be able to fetch sample data for the module at `/data/:start_letter/words.json` (e.g, `/data/a/words.json`).

## Specifications
* At most 5 words should be returned for any given search. These should be sorted in order of the percentage of the string match. For instance, for search term 'aa' and results 'aaa', 'aa', 'aamolg', the sorted results should be: 'aa', 'aaa', 'aamolg'.
* When results are populated it should be with an animation. You can choose how you want to interpolate, have fun with it!
* Each word should have an `x` next to it. Clicking the `x` should remove the word from the list. Subsequent searches should not contain the `x`'d word (Note: This doesn't have to persist between sessions, in other words no need for client storage).
* When results are removed, it should be with an animation. Again, go crazy.

## Running A Development Environment
In order to keep our Javascript clean and DRY, we choose to package our code as Node modules. Then, with the help of [Webpack](https://webpack.js.org/) these modules are compiled to scripts for browser environments. In a development environment, we want this compilation to occur whenever one of the source files changes. We also need a development server running to serve up our static files for testing.

In order to facilitate, run the following two npm scripts in separate terminals:

```
// watch the source files for changes, re-run compilation on change
npm run watch

// run a web server at localhost:8080
npm run devserver
```

Now, you'll be able to test progress on the widget at localhost:8080/

## Helpful Links
* [Webpack Docs](https://webpack.js.org/)
* [ESLint](https://eslint.org/docs/user-guide/)
