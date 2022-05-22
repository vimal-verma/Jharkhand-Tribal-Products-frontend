import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { NotificationContainer } from 'react-notifications'
import './App.css'
import Home from './page/'
import About from './page/About'
import Register from './page/Register'
import Contact from './page/Contact'
import Nofound from './page/Nofound'
import Login from './page/Login'
import axios from 'axios'
import logout from './page/Logout'
import Dashboard from './page/Dashboard'
import Manageblog from './page/Manageblog'
import Manageproduct from './page/Manageproduct'
import Addblog from './page/Addblog'
import Addproduct from './page/Addproduct'
import Product from './page/Product'
import Blog from './page/Blog'
import Building from './page/Building'
import Admin from './page/Admin'
import Manageadmin from './page/Manageadmin'
import Message from './page/Message'
import Singleblog from './page/Singleblog'
import Singleproduct from './page/Singleproduct'
import Image from './page/Image'
import ManagePage from './page/Managepage'
import AddPage from './page/Addpage'
import Service from './page/Service'
import Editblog from './page/Editblog'
import EditProduct from './page/Editproduct'
import EditPage from './page/Editpage'
import Changepassword from './page/changepassword'
import Resetpassword from './page/Resetpassword'
import Resetpasswordtoken from './page/Resetpasswordtoken'
import Cart from './page/Cart'
import Order from './page/Order'
import Developer from './page/Developer'
import Orders from './page/Orders'
import Receipt from './page/Receipt'
import Portfolio from './page/Portfolio'
import SinglePortfolio from './page/SinglePortfolio'
import AdminRoute from './utils/AdminRoute'
import PrivateRoute from './utils/PrivateRoute'
import Statistics from './page/Statistics'

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL
  if (process.env.REACT_APP_BUILDING === 'true') {
    return (
      <Router>
        <Route path="" component={Building} />
      </Router>
    )
  } else {
    return (
      <div>
        <NotificationContainer />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={logout}></Route>
            <PrivateRoute path="/changepassword" component={Changepassword}></PrivateRoute>
            <Route path="/contact" component={Contact}></Route>
            <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
            <Route path="/developer" component={Developer}></Route>
            <AdminRoute path="/admin" component={Admin}></AdminRoute>
            <AdminRoute path="/image" component={Image}></AdminRoute>
            <AdminRoute path="/Manage_blog" component={Manageblog}></AdminRoute>
            <AdminRoute path="/Manage_Products" component={Manageproduct}></AdminRoute>
            <AdminRoute path="/Manage_admin" component={Manageadmin}></AdminRoute>
            <AdminRoute path="/Manage_page" component={ManagePage}></AdminRoute>
            <AdminRoute path="/add_blog" component={Addblog}></AdminRoute>
            <AdminRoute path="/Add_Product" component={Addproduct}></AdminRoute>
            <AdminRoute path="/add_page" component={AddPage}></AdminRoute>
            <AdminRoute path="/edit_blog/:url" component={Editblog}></AdminRoute>
            <AdminRoute path="/edit_product/:url" component={EditProduct}></AdminRoute>
            <AdminRoute path="/edit_page/:url" component={EditPage}></AdminRoute>
            <AdminRoute path="/message" component={Message}></AdminRoute>
            <AdminRoute path="/statistics" component={Statistics}></AdminRoute>
            <PrivateRoute path="/order" component={Order}></PrivateRoute>
            <AdminRoute path="/orders" component={Orders}></AdminRoute>
            <Route path="/cart" component={Cart}></Route>
            <Route exact path="/blog" component={Blog}></Route>
            <Route path="/blog/:id" component={Singleblog}></Route>
            <Route exact path="/product" component={Product}></Route>
            <Route path="/product/:id" component={Singleproduct}></Route>
            <Route path="/receipt/:id" component={Receipt}></Route>
            <Route exact path="/portfolio" component={Portfolio}></Route>
            <Route path="/portfolio/:url" component={SinglePortfolio}></Route>
            <Route
              exact
              path="/resetpassword"
              component={Resetpassword}
            ></Route>
            <Route
              path="/resetpassword/:token"
              component={Resetpasswordtoken}
            ></Route>
            <Redirect from="/u/:user" to="/@:user" />
            <Route path="/:page" component={Service}></Route>
            <Route path="" component={Nofound} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
