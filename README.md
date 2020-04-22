# template-module
Default template for server-base modules

This output generates a straight base to provide other applications useful information like Server State example [Web Client](https://github.com/server-state/web-client).

### Checklist for using this template
- [ ] Change name and description in this README
- [ ] Change the package name in the `package.json`
- [ ] Change the repository, issue and other urls as well as the `author` field in the `package.json`, as needed
- [ ] Familiarize yourself with the specifications for modules, which can be found in https://specs.server-state.tech/.

**Afterwards**
- [ ] Write source code for your module in the `src` module
- [ ] Adjust the existing test in `tests/001-basic.test.js` so that your *SMF* gets passed the necessery parameters and has the necessary mocks to pass. **Do not delete this test!** It is vital that the data you return is JSON-serializable and therefore, this test is required.
- [ ] Write tests for your code (until you reach 100 % coverage, this has to get trusted to get deployed to production servers) in the tests folder

**Afterwards**
- [ ] Add all dependencies **you** have added as externals in the `webpack.config.js`
- [ ] Run `npm run lint` (fix any errors that get shown)
- [ ] Run `npm run test` (fix any errors that might occur)
- [ ] Run `npm run build` (fix any errors that might occur)
- [ ] Test by running `node` in the repo directory and requiring the module with `require('.')`. You can then test it interactively.
- [ ] Publish as `v0.0.9` to npm to ensure CI can publish in the future (use `--access=public` for scoped packages
- [ ] Bump version number in `package.json` to `0.1.0`, commit and push to GitHub
- [ ] Add `gh_token` and `npm_token` to the GitHub repo secrets to allow CI publishing
- [ ] Add a tag called `v0.1.0` and push it to GitHub
- [ ] Watch GitHub actions publish the new version for you :wink:

**For every new version**
- [ ] Add all dependencies **you** have added as externals in the `webpack.config.js`
- [ ] Run `npm run lint` (fix any errors that get shown)
- [ ] Run `npm run test` (fix any errors that might occur)
- [ ] Run `npm run build` (fix any errors that might occur)
- [ ] Test by running `node` in the repo directory and requiring the module with `require('.')`. You can then test it interactively.
- [ ] Bump version number in `package.json`
- [ ] Add a tag called `v[package.json version number]` and push it to GitHub
- [ ] Watch GitHub actions publish the new version for you :wink:

---

This official module belongs to the organization [Server State](https://github.com/server-state).
