# Notes website using MERN

A simple notes application built with MERN stack!!

[Click here to view the website](https://thinkbook-mern-2evx.onrender.com/)

> [!NOTE]
> It might take some time to wake up as it is hosted on free plan

## Run locally

If you want to run the website locally, you will need:

- Node.js and npm
- A MongoDB connection string
- Upstash Redis credentials for rate limiting

Create `backend/.env` with:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

From the repository root, install dependencies:

```bash
npm install --prefix backend
npm install --prefix frontend
```

Start the backend in one terminal instance:

```bash
npm run dev --prefix backend
```

Start the frontend in another terminal instance:

```bash
npm run dev --prefix frontend
```

Open <http://localhost:5173> in a browser.
