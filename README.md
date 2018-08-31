# Adonis Nextjs 🚀

> A provider to initialize nextjs app with adonis.

[![npm](https://img.shields.io/npm/v/adonis-nextjs.svg)](https://www.npmjs.com/package/adonis-nextjs)

## Installation

You can install the package from npm.

this provider assume you have nextjs, React & React Dom

```bash
adonis install adonis-nextjs
```

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

The next project directory is `next` by default, but you can change it using environment variables `NEXT_FOLDER`.

## Register next.js Commands

```json
{
	"scripts": {
		"dev": "node server.js",
		"build": "next build ./next",
		"export": "next export ./next",
		"start": "NODE_ENV=production node server.js"
	}
}
```

## Release History

Checkout [CHANGELOG.md](https://github.com/omarkhatibco/adonis-nextjs/blob/master/CHANGELOG.md) file for release history.

## Meta

[@AdonisJs](http://adonisjs.com/)

[@nextjs](https://github.com/zeit/next.js/)

Checkout [LICENSE](https://github.com/omarkhatibco/adonis-nextjs/blob/master/LICENSE) for license information.
