# React Boilerplate

This boilerplate was generated using [vitejs](https://vitejs.dev/) instead of [Create React App](https://create-react-app.dev/). Most of the tutorials online will probably mention CRA, any setup steps will not be applicable to this project but the React parts should be.

## CSS

You can add global styles via `src/styles/index.scss` or import them in your `.tsx` files. Have a look at `src/pages/CatFacts` for an example of how you could do this.

If using a CSS framework, you can `@import` them in `src/styles/index.scss`. Below is an example of how you might import Bootstrap.

```scss
@import "./variables";
@import "../../node_modules/bootstrap/scss/boostrap";
```

## API

If you are running your API locally, you will need to configure vite to proxy any requests to `/api` to your server. Check out `vite.config.ts`, it should have a place for you to put the address of your API server.
