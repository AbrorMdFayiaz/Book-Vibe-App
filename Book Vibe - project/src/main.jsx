import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './componnts/Root';
import ListedBooks from './componnts/ListedBooks';
import Home from './componnts/Home';
import PagesToRead from './componnts/pagesToRead/PagesToRead';
import IndividualBookDetails from './componnts/IndividualBookDetails';
import booksInfo from '../src/assets/booksData.json';
import BookProvider from './allContextAPIs/BookContext';
import { StrictMode } from 'react';
import WishBooks from './componnts/listedBookPage/WishBooks';
import ReadBooks from './componnts/listedBookPage/ReadBooks';
import { Bounce, ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "listed/books", Component: ListedBooks,
        children:[
          {index:true, element: <h1></h1> },
          { path: "wishlist/books", element: <h1></h1>}
        ]
       },
      { path: "pages/to/read", Component: PagesToRead },
      { path: "individualBookDetails/:bookId",
        loader: async ({ params }) => {
          // params are available in loaders/actions
          // console.log( "root : ", booksInfo[params.bookId]);
          return { individualBook : booksInfo[params.bookId - 1] };
        },
        Component: IndividualBookDetails,
      },
    //   {
    //     path: "auth",
    //     Component: AuthLayout,
    //     children: [
    //       { path: "login", Component: Login },
    //       { path: "register", Component: Register },
        ],
    //   },
    //   {
    //     path: "concerts",
    //     children: [
    //       { index: true, Component: ConcertsHome },
    //       { path: ":city", Component: ConcertsCity },
    //       { path: "trending", Component: ConcertsTrending },
    //     ],
    //   },
    // ],
    errorElement:<h1>404 Page not found</h1>
  },
]);


createRoot(document.getElementById('root')).render(

  <StrictMode >
    <BookProvider>
      <RouterProvider router={router} ></RouterProvider>
                  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
    </BookProvider>
  </StrictMode>,
)
