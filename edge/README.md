# monosource

![Edge Test Runner](https://github.com/probolinggo-dev/monosource/workflows/Edge%20Test%20Runner/badge.svg?branch=master)

Probolinggo Dev Mono Repo

edge is a GraphQL API Wrapper for [Probolingoo Career](https://career.probolinggo.dev/).

## Contributing

Feel free to open issue or even better send Pull Request to improve `edge` project. In case you want to make a contribution to address an [issue](https://github.com/probolinggo-dev/monosource/issues) or whatever is that and then make a PR to merge what have you done with edge base source code. Before you do that, please make sure you follow this rule:

### 1. Use [Editor Config](https://editorconfig.org)

Whatever IDE you use, install and activate this plugins to maintain our consistent coding styles accross contributor with various IDE.

_Note: The configuration already included in this project. check: `.editorconfig`_

### 2. Use Prettier

We use (and you must use this) Prettier to enforces a consistent style based on the rule that take the maximum line length into account, wrapping code when necessary. If you use VSCode as your IDE, use [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension to address this and we already ship the configuration file under `.vscode` directory.

**Contributing by make a donation to cover up our hosting costs are very welcome :)**

## Development

1. Fork to your repository
2. Clone and set upstream repository
3. To run without docker, make sure you have [Node.Js](https://nodejs.org/) installed with 10.0 minimum version then run this command

```sh
yarn install && yarn dev
```

4. If you use docker, use this example command

```sh
docker run --rm -it -v $PWD:/app -w /app/edge -p 4000:4000 node:10 yarn install && yarn dev
```

5. Open [127.0.0.1:4000/graphql](http://127.0.0.1:4000/graphql) in your browser to test
6. Make change and push to your forked repo
7. Create PR
