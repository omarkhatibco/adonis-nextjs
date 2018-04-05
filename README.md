# Adonis Nextjs 🚀

> A provider to initialize nextjs app with adonis.

[![npm](https://img.shields.io/npm/v/adonis-nextjs.svg)](https://www.npmjs.com/package/adonis-nextjs)

## Installation

You can install the package from npm.

this provider assume you have nextjs, React & React Dom

```bash
npm i --save adonis-next
```

## Configure

Register it in `bootstrap/app.js`:

```javascript
const providers = [..."adonis-nextjs/providers/NextProvider.js"];
```

then use it in your Router in `start/routes.js`:

```javascript
const Route = use("Route");
const Next = use("Adonis/Addons/Next");
const handle = Next.getRequestHandler();

// API Endpoint for your database
Route.get("/api", ({ request }) => {
  return { greeting: "I'm Api Endpoint" };
});

// // Your Next.js app

Route.get("/a", ({ request, response }) => {
  return Next.render(request.request, response.response, "/b", request.request.query);
});

Route.get("/b", ({ request, response }) => {
  return Next.render(request.request, response.response, "/a", request.request.query);
});

Route.get("/posts/:id", ({ request, response }) => {
  return Next.render(request.request, response.response, "/posts", {
    id: request.request.params.id
  });
});

Route.get("*", ({ request, response }) => {
  return handle(request.request, response.response);
});
```

## Next.js Changes that you should do

* The `next.config.js` file must be in `config/next.js`.
* The next project directory must be `resources`.

and add a script to your package.json like this:

```json
{
  "scripts": {
    "dev": "node server.js",
    "build": "next  build ./resources",
    "start": "cross-env NODE_ENV=production node server.js"
  }
}
```

## Release History

Checkout [CHANGELOG.md](https://github.com/omarkhatibco/adonis-nextjs/blob/master/CHANGELOG.md) file for release history.

## Meta

[@AdonisJs](http://adonisjs.com/)

[@nextjs](https://github.com/zeit/next.js/)

Checkout [LICENSE](LICENSE) for license information.
