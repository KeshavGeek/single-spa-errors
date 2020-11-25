# single-spa-errors

Code to reproduce [single-spa](https://github.com/single-spa) project and sub-projects errors.

* Reproducing scenarios links posted on issues are tags with the pattern
  `<subproject>#<issue>-<evolution>`.
* Branches with prefixes (e.g. bugfix) follow error fixing evolution.
* Branches with no prefix are building blocks for error scenarios (e.g. root, angular10, angular11).


## Branch features

Features that were merged into this branch to build the error scenario.

* `{directory}` directory with {feature name}


## Errors

Errors that can be reproduced in this branch. Usually just the one you were looking for when
following a link from an issue.

### {Error title}

[{subproject}#{issue number}](https://github.com/single-spa/{subproject}/issues/{issue number})

{description}

```bash
{STEPS}
```
