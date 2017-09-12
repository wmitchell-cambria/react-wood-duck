# Fractal POC

The goal of this proof of concept is to the determine feasability and stability of executing [Fractal](http://fractal.build/) as the foundation for a React-based living style guide and component library.

This POC utilizes an adapter to support React. The React adapters we're currently aware of are:

* [React Adapter](https://github.com/sumul/fractal-react-adapter) by [Sumul](https://github.com/sumul) __(Currently based off this adapter)__
* [Fractal WIP Official Adapter](https://github.com/frctl/react-adapter)
* [React Adapter](https://github.com/guzart/fain/blob/v0.9.0/packages/fain-src/lib/frctl-react-adapter/adapter.js) by [Guzart](https://github.com/guzart)

## Getting Started

Once you clone the repository, be sure to install dependencies:

```
npm install
```

Fractal has an extremely useful global CLI, available via NPM. It's highly recommended to install that, using the following command:

```
npm i -g @frctl/fractal
```

Once you've run both commands, you can run the following command to start up your development server:

```
fractal start --sync
```

It's also recommended to dig into the [Fractal documentation](http://fractal.build/guide/getting-started), as it contains alot more useful information on setup.

## License

MIT
