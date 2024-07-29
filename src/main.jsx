import React from 'react'
import ReactDOM from 'react-dom/client'
import "./Style.css"
import Header from './Components/Header'
import Product from './Components/Product'
import ProductList from"./Components/ProducList"
import { Provider } from 'react-redux'
import store from './Redux/store/store'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Header2 from './Components/Header2'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store} >
    <BrowserRouter>
    {/* <Header2 /> */}
<App />
    </BrowserRouter>
  </Provider>
  
  
)
