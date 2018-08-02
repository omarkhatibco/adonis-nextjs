## Configure

### Register provider

The provider must be registered as a `provider`.

```javascript
const providers = [...,'adonis-nextjs/providers/NextProvider'];
```

## Register your routes

```javascript
const Route = use('Route');
const Next = use('Adonis/Addons/Next');
const handler = Next.getRequestHandler();

// API Endpoint for your database
Route.get('/api', ({ request }) => {
  return { greeting: "I'm Api Endpoint" };
});

// * Next Routes
Route.get('/b', ({ request, response }) => {
  const query = request.get();
  return Next.render(request.request, response.response, '/b', query);
});

Route.get('/post/:id', ({ request, response, params }) =>
  Next.render(request.request, response.response, '/b', {
    id: params.id
  })
);

Route.get(
  '*',
  ({ request, response }) =>
    new Promise((resolve, reject) => {
      handler(request.request, response.response, promise => {
        promise.then(resolve).catch(reject);
      });
    })
);
```

## Adding next.js folder

The next project directory must be `src`.

## Register next.js Commands

```json
{
  "scripts": {
    "dev": "node server.js",
    "build": "next build ./src",
    "export": "next export ./src",
    "start": "NODE_ENV=production node server.js"
  }
}
```
