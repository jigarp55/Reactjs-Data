import { createRoot } from 'react-dom/client'
import {Provider } from 'react-redux'
import Store from './Store/store'
import ItemList from "./ItemList"
import App from './App.jsx'
import UserForm from './userForm.jsx';
import Comments from './Comment.jsx'

// import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    {/* <App /> */}
    {/* <ItemList /> */}
    <Comments />
    <UserForm />
  </Provider>,
)

