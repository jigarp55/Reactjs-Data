import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import DisplayWeatherData from './components/DisplayWeatherData.jsx'
import LoginPage from './components/LoginPage.jsx'
import './bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Weather from './components/Weather.jsx'
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <GoogleOAuthProvider clientId='356083414177-lsr69ahq2pmf6snltqopmpsr7ait4jid.apps.googleusercontent.com'>
    <Provider store = {store}>
    
       <BrowserRouter>
         <Routes>
           <Route path='/' element = {<LoginPage></LoginPage>}></Route>
           <Route path='/weatherdata' element = {<Weather></Weather>}></Route>
         </Routes>
       </BrowserRouter>
     
    </Provider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
