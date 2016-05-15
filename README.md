# redux-plugins-immutable-hot-loader

Webpack loader that hot-reloads plugins made with [redux-plugins-immutable](http://github.com/jcoreio/redux-plugins-immutable) when you make changes to them.

### Usage

(Assumes you are already using `redux-plugins-immutable` in your app, and know how to run webpack in dev mode with hot reloading enabled)

```
npm install --save redux-plugins-immutable-hot-loader
```

To require and add a plugin to your store:

```es6
import store from './myStore'
import {pluginActions} from 'redux-plugins-immutable'
import MyPlugin from 'redux-plugins-immutable-hot!./MyPlugin'

store.dispatch(pluginActions.addPlugin(MyPlugin))
```

after this, if you make changes to MyPlugin, it will automatically dispatch `replacePlugin(<new version of MyPlugin>)`
