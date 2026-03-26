import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import store from './store/store.js'
import router from './components/routes/AppRoutes.jsx'
import { Provider } from 'react-redux'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
     
  </StrictMode>,
)
