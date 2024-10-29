# Fast React Pizza

Pick pizza you want, make order and track progress!

[Live Demo](https://react-pizza-meiyrbek.vercel.app)

## Features:

- add pizza to cart, choose quantity of each
- track what you already have in cart
- make order by complete form with phone, address (possible to use geolocation)
- add order to priority queue by paying extra money
- no payment processing

## Tech Features:

- application uses backend servise to fetch and post data (remote state)
- that remote state manage by react router data loading feature ("render as you fetch") and router action to post data to remote api
- global UI state manage be redux-toolkit, split global state on slices
- styling: Tailwindcss, responsive design (mobile first)

## This project is build with:

- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwindcss](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [Hosted by Vercel](https://www.vercel.com)

React third-party packeges:

- [React Router](https://reactrouter.com/en/main)
- [React Redux](https://react-redux.js.org/)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
