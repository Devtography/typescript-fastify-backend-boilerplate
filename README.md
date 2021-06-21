# TypeScript Fastify Backend Boilerplate

Opinionated TypeScript based backend service boilerplate with Fastify.

## Getting started
```sh
# clone this repo
git clone https://github.com/Devtography/typescript-fastify-backend-boilerplate.git
```
Or generate a new repo on GitHub using this template [here](https://github.com/Devtography/typescript-fastify-backend-boilerplate/generate)

```json
// edit the following fields in package.json for your own project
{
  "name": your-project-name,
  "version": whatever-you-like,
  "description": your-own-description,
  "author": who's-the-author?,
  "license": if-you-don't-want-to-use-MIT,
  "repository": type-and-link-of-your-repo,
  "keywords": keywords-of-your-project,
  "bugs": issue-page-of-your-repo,
  "homepage": homepage-of-your-repo
}
```

Then install all the `node_modules` needed by executing the following command:
```sh
cd folder-containing-the-cloned-boilerplate
npm install --also-dev
```

Manually create folders `src/models` & `src/utils` (folder structure shown
below) as Git doesn't include empty folders.

That's it. You're ready to rock.

## Usage
There're currently 4 NPM commands preconfigured in `package.json`, they are:

`npm run build` - Removes everything from `dist/`, then compile your `.ts` files
into `JavaScript` with `tsc`, and use `babel` to correct the module require
paths.

`npm run debug` - runs the `fastify` server with `ts-node-dev` with `NODE_ENV`
set as `development` for debug. The `fastify` server will respawn on file saved
under this mode.

`npm run test` - runs your `Jest` tests under `tests/` with coverage reports.

`npm run watch-test` - same as `npm run test` but execute on file saved
automatically.

For `vscode` users, 2 launch configs - `Debug` & `Jest tests` are included in
this boilerplate. Use those launch configs to run your app / `Jest` tests if
you need the breakpoints to work.

## Folder structure
```
typescript-fastify-backend-boilerplate/
| - .vscode/
| | - launch.json               //- Preconfigured vscode debug settings
| - node_modules/
| - dist/                       //- Generated by `tsc` automatically
| - src/
| | - apis/                     //- Folder which `fastify-autoload` looks for
| | | - {routes}/               //- Create folders for your routes
| | | - index.ts                //- APIs on `/`
| | - models/
| | - utils/
| | - app.ts                    //- Module where Fastify is initialled
| | - server.ts                 //- Entry point
| - tests/                      //- Unit tests
| | - apis/
| | | - index.test.ts
| | | - {routes}.test.ts
| | - app.test.ts
| | - tsconfig.json             //- tsconfig to stop TypeScript & ESLint complaining
| - .babelrc                    //- To correct import paths in `tsc` compiled files
| - .eslintignore
| - .eslintrc
| - .gitignore
| - jest.config.js
| - LICENSE
| - package-lock.json
| - package.json
| - README.md
| - tsconfig.json
```

## Author
[Wing Chau](https://github.com/iamWing) [@Devtography]

## Support the project
Contributions via pull requests are welcome and encouraged. If there's anything
you consider essential that should be included in this boilerplate, please don't
hesitate to implement yourself and make a pull request :)

Same as the other open sources projects in [@Devtography], I maintain & further
develop this boilerplate with my free time. If you found my work useful and
wanna support me keep on doing all these, please consider
[donate/sponsor](https://github.com/sponsors/iamWing) me.

## License
TypeScript Fastify Backend Boilerplate is open source software 
[licensed as MIT](LICENSE).

[@Devtography]: https://github.com/Devtography
