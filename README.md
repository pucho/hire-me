This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

You will need to create a .env file with this 2 keys:

```bash
NEXT_PUBLIC_ACCESS_TOKEN="234ffdb8-0889-4be3-b096-97ab1679752c"
NEXT_PUBLIC_API_URL="https://tryfamly.co/api"
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

TODO List:

Right now the app assumes everything goes well, with more time I would add error management on each API call.
I need to add inputs for the pickupTime at check in. Also a better control for the loading state of the check in/out action.
