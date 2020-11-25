# single-spa-errors

Code to reproduce [single-spa](https://github.com/single-spa) project and sub-projects errors.

* Reproducing scenarios links posted on issues are tags with the pattern
  `<subproject>#<issue>-<evolution>`.
* Branches with prefixes (e.g. bugfix) follow error fixing evolution.
* Branches with no prefix are building blocks for error scenarios (e.g. root, angular10, angular11).


## Branch features

Features that were merged into this branch to build the error scenario.

* `angular11-app` directory with Angular 11 application
  * Not strict
  * No routing
  * CSS
  * No animations


## Errors

Errors that can be reproduced in this branch. Usually just the one you were looking for when
following a link from an issue.

## custom-webpack@^11 not found

[single-spa-angular#306](https://github.com/single-spa/single-spa-angular/issues/306)

Executing npm install just after creating the Angular 11 parcel produces the error
"No matching version found for @angular-builders/custom-webpack@^11".
This is using single-spa-angular@4.8.0, after the fix from #304 .

Updates:
1. npm install @angular-builders/custom-webpack@latest (10.0.1);
2. npm install

Quotes error on serve.

```bash
cd angular11-app
npm install
npm run serve:single-spa:angular11-app
```

### Broken tsconfig.app.json

[single-spa-angular#308](https://github.com/single-spa/single-spa-angular/issues/308)

Serve results in "An unhandled exception occurred: tsconfig.app.json:2:3 - error TS1327: String
literal with double quotes expected." error.

Cannot reproduce on this branch since `npm install` is broken by another error.

Update:
1. Manual fix of `tsconfig.app.json`
