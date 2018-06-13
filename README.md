# reach-router-basepath-demo

With basepath set to `/reach-router-basepath-demo`: https://github.com/Pyrolistical/reach-router-basepath-demo/blob/master/src/index.js#L29

Dashboard link is fine, Home link breaks.

Try it for yourself: https://pyrolistical.github.io/reach-router-basepath-demo/

The Home link is `<Link to="/">` and changes the history to be `https://pyrolistical.github.io/` when it should have set it to `https://pyrolistical.github.io/reach-router-basepath-demo/`

Full source: https://github.com/Pyrolistical/reach-router-basepath-demo
I couldn't demo this in codesandbox since I need the app to be deployed on a basepath.

https://github.com/reach/router/issues/78
