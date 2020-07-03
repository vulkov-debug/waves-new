import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./hoc/layout";
import RegisterLogin from './components/Register_login';
import Register from './components/Register_login/register';
import Auth from './hoc/auth';
import Shop from './components/Shop';
import ProductPage from './components/Product';

import UserDashboard from './components/User';
import AddProduct from './components/User/Admin/add_product';
import ManageCategories from './components/User/Admin/manage_categories';
import UserCart from './components/User/cart';
import UpdateProfile from './components/User/update_profile';
import ManageSite from './components/User/Admin/manage_site';

const Routes = () => {
  return (
    <Layout>
      <Switch>
      <Route path="/user/dashboard" component={Auth(UserDashboard,true)} />
      <Route path="/user/cart" component={Auth(UserCart,true)} />
      <Route path="/admin/add_product" component={Auth(AddProduct,true)} />
      <Route path="/admin/manage_categories" component={Auth(ManageCategories,true)} />
      <Route path="/user/user_profile" component={Auth(UpdateProfile,true)} />
      <Route path="/admin/site_info" component={Auth(ManageSite,true)} />



      <Route path="/product_detail/:id" component={Auth(ProductPage,null)} />
      <Route path="/register" component={Auth(Register,false)} />
      <Route path="/register_login" component={Auth(RegisterLogin,false)} />
        <Route path="/shop" component={Auth(Shop,null)} />
        <Route path="/" component={Auth(Home,null)} />

      </Switch>
    </Layout>
  );
};

export default Routes;
