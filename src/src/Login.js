import React, { useState } from 'react';
import './Login.css';
import jQuery from "jquery";

window.$ = window.jQuery = jQuery;

function HelpMessage(props) {
  function onScroller() {
    window.$('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
  }

  return (
    <p class="message">
      {props.msg}
      <a href="#" onClick={onScroller}>
        {props.detail}
      </a>
    </p>
  );
}

function Login() {

  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div class="login-page">
      <img class="logo-img" src="img/flea_market.png" />

      <div class="form">

        <form class="register-form">
          <h2>REGISTER</h2>

          <input type="checkbox" id="seller2" /><label for="seller2" name="cb">Seller</label>
          <input type="checkbox" id="buyer2" /><label for="buyer2" name="cb">Buyer</label>

          <input type="text" placeholder="name" name="id" required onChange={(e) => setID(e.target.value)} />
          <input type="password" placeholder="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
          <input type="text" placeholder="email address" name="email" required onChange={(e) => setEmail(e.target.value)} />
          <button class="create-btn" type="reset">create</button>
          <HelpMessage msg="Already registered? " detail="Sign In" />
        </form>

        <form class="login-form">
          <h2>LOGIN</h2>

          <input type="checkbox" id="seller1" /><label for="seller1" name="cb">Seller</label>
          <input type="checkbox" id="buyer1" /><label for="buyer1" name="cb">Buyer</label>

          <input type="text" placeholder="username" onChange={(e) => setID(e.target.value)} />
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <button class="login-btn" type="reset">login</button>
          <HelpMessage msg="Not registered? " detail="Create an account" />
        </form>
      </div>
    </div>
  );
}

export default Login;
