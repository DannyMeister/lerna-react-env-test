# Lerna React-Scripts Environment Variable Issue

This branch demonstrates an issue reported to the Lerna project.  Based on currently documented piority order, expected output of this page when running `yarn lerna run start` would be "REACT_APP_HighestPriority: .\[target-name\].env" but instead is "REACT_APP_HighestPriority: .env.\[target-name\]".

From https://nx.dev/recipes/environment-variables/define-environment-variables#setting-environment-variables
```
apps/my-app/.[target-name].env
apps/my-app/.env.[target-name]
apps/my-app/.local.env
apps/my-app/.env.local
apps/my-app/.env
.[target-name].env
.env.[target-name]
.local.env
.env.local
.env
```

