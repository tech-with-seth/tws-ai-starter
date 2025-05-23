# tws-ai-starter

React Router 7 & Open AI Quickstart

![React Router 7 and Open AI showcase](./rr7-openai-hero.png)

📖 [React Router docs](https://reactrouter.com/dev)

## Development

Add your Open AI key to an `.env` file:

```bash
OPENAI_API_KEY="<YOUR_OPEN_AI_API_KEY>"
```

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

-   `build/server`
-   `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.
