import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About/About';
import { MoviesFetch } from './pages/Movies/Movies';
import store from './store/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App/>
      </Provider>
    ),
    children: [
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/movies",
        element: <MoviesFetch/>
      }
    ]
  },
  
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
