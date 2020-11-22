# Serverless package

## General

Global Requirements:

- commitlint [https://commitlint.js.org/#/guides-local-setup](https://commitlint.js.org/#/guides-local-setup)
- lerna [https://github.com/lerna/lerna](https://github.com/lerna/lerna)
- serverless [https://www.serverless.com/](https://www.serverless.com/)

## Structure

### Hello package

#### Layers:

- packagemngr layer
- hello layer

#### Libraries:

- sequelize

### World package

#### Layers:

- packagemngr layer
- world layer

#### Libraries

- joi
- express

## Lerna commands

```bash
lerna add serverless-layers --dev --scope=@codebit-labs/monorepo-{hello,world}
```

## Scripts

### Package the project

```bash
lerna run sls:package --scope=@codebit-labs/monorepo-{package} --stream
```

### Deploy the project

```bash
lerna run sls:deploy --scope=@codebit-labs/monorepo-{package} --stream
```

**Note** The `--stream` is usefully for show the log process

## Bugs

If you try install multiples packages with lerna there is a bug and isn't recognized the packages

## Tips

Install two dependencies in shortcut mode

### Note 1

I was tested rebind option with @provider decorator from \*inversify-binding-decorators\* I would have wished overwrite injection reference with only put it the provider decorator in the replacement class but this is test wasn't success.

#### Update

If I import the file of this manner `import 'path'` the container find the injector and build local providers but is unable to rebind references of injectors

### Note 2

Very importantly understand that the order in that load the container modules affect the way of the behaviour of the imported classes

```bash
[yarn add|npm install] @commitlint/{cli,config-conventional}
```
