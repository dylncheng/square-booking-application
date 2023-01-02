# Square Booking Application

## Premise
In our experience, we found that most online booking applications are difficult to use. Some issues we found in our research include:
- Having to manually create an account (No sign-in with Google)
- Poor calendar booking interface
- Confusion when choosing time slots

## Our Solution
We designed a hassle-free booking application for Square sellers and their customers. It queries information from a previously setup Square seller dashboard to generate a customized booking site for that Square seller. The features include:
- Sign-in with Google
- Save on refresh
- Service selection
- Date selection
- Time Selection
- Booking Summary and Booking Confirmation

## What We Learned
The main thing we learned was how to design and implement a large-scale application on the business-level. We had to keep in mind the workflow of the Square sellers, as well as the interests of their customers. A big challenge was making the site compatible for different Square sellers because each seller sets up their Square store differently. On the technology side of things, the task fell into three main categories: authentication, API queries, and front-end. The main thing we learned while working with the Square APIs was how to work with the large Square ecosystem. We had to combine the use of multiple APIs in order to make requests from other ones. Once we figured out that process, the last challenge was how to get that information as a readable format in the front-end. We used SSR in this case, and designed the front-end using Material UI components.

## Technologies Used
- Next.js (APIs, SSR)
- Firebase Firestore
- Firebase Authentication
- Square APIs (Booking API, Labor API, Team API, Catalog API, Customers API)
- Material UI





## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


