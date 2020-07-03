import React from "react";
import MyButton from '../utils/button';
import Login from './login';

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              dolorem perferendis, aliquid sit vitae adipisci possimus deleniti
              ex sequi accusantium eius. Natus repellat magnam cupiditate
              impedit, minima in officia aperiam!
            </p>
            <MyButton
             type='default'
             title='Create an account'
             linkTo='/register'
             addStyles={{
                 margin:'10px 0 0 0'
             }}
            />
          </div>
          <div className="right">
              <h2>Registered customers</h2>
              <p>If you have an account please Log in</p>
              <Login/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
