import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import Landing from './components/Landing.jsx'
import AddOns from './components/AddOns.jsx'
import Meals from './components/Meals.jsx'
import Details from './components/Details.jsx'
import Venue from './components/Venue.jsx'
import Login from './Authentication/Login.jsx'

const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element=<App/>>
        <Route path='' element=<Landing/> />
        <Route path='/venue' element=<Venue/> />
        <Route path='/add-ons' element=<AddOns/> />
        <Route path='/meals' element=<Meals/> />
        <Route path='/details' element=<Details/> />
        <Route path='/login' element=<Login /> />
      </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes}/>
  </Provider>,
)
