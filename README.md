# Fast React Pizza

Pick pizza you want, make order and track progress!

[Live Demo](https://fast-react-pizza-meiyrbek.vercel.app)

## Features:

- Add pizza to cart, choose quantity of each
- Track what you already have in cart
- Make order by complete form with phone, address (possible to use geolocation)
- Add order to priority queue by paying extra money
- No payment processing

## Tech Features:

- Application uses backend servise to fetch and post data (remote state)
- That remote state manage by react router data loading feature ("render as you fetch") and router action to post data to remote api
- Global UI state manage be redux-toolkit, split global state on slices
- Styling: Tailwindcss, responsive design (mobile first)
- Added **Progressive Web App (PWA)** support using [Vite PWA](https://vite-pwa-org.netlify.app/), enabling offline functionality and caching


## This project is build with:

- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwindcss](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [Hosted by Vercel](https://www.vercel.com)
- [Vite PWA](https://vite-pwa-org.netlify.app/) for service workers and offline capabilities

React third-party packeges:

- [React Router](https://reactrouter.com/en/main)
- [React Redux](https://react-redux.js.org/)

## Installation

To run the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/your-username/react-quiz.git

# Navigate to the project folder
cd react-quiz

# Install dependencies
npm install

# Start the development server
npm start
```

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## License

This project is licensed under the MIT License.
