import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import Landing from './components/Landing.jsx'
import Product from './components/Product.jsx'
import AddOns from './components/AddOns.jsx'
import Meals from './components/Meals.jsx'
import Details from './components/Details.jsx'

const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element=<App/>>
        <Route path='' element=<Landing/> />
        <Route path='/venue' element=<Product/> />
        <Route path='/add-ons' element=<AddOns/> />
        <Route path='/meals' element=<Meals/> />
        <Route path='/details' element=<Details/> />
      </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes}/>
  </Provider>,
)
