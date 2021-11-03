# `@m2-oss/web-configs`

## Install

```sh
$ yarn add @m2-oss/web-configs prettier eslint typescript -D
```

## Usage

### `.prettierrc.js`

```js
module.exports = {
    ...require('@m2-oss/web-configs/prettier'),
};
```

### `.eslintrc.js`

```js
module.exports = {
    extends: require.resolve('@m2-oss/web-configs/eslint'),
    env: {
        node: true,
    },
};

```

### `tsconfig.json`

```json
{
    "extends": "@m2-oss/web-configs/tsconfig.json"
}
```

## License

MIT © [m2](https://m2.ru)
