# os-vue-template

> A full-featured Webpack setup with hot-reload, linting, unit testing & css extraction.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

```bash
$ npm install -g vue-cli
$ vue init Jexordexan/os-vue-template my-project
$ cd my-project
$ npm install
$ npm run dev
```

This will scaffold the project using the `master` branch. If you wish to use the latest version of the webpack template, do the following instead:

```bash
$ vue init Jexordexan/os-vue-template#develop my-project
```

:warning: **The develop branch is not considered stable and can contain bugs or not build at all, so use at your own risk.**

The development server will run on port 8080 by default. If that port is already in use on your machine, the next free port will be used.

## What's Included

- `npm run dev`: first-in-class development experience.

  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.

  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

```bash
vue init username/repo my-project
```
