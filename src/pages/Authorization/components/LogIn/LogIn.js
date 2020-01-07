import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => (
  <div className="authorization">
    <div className="authorization__wrap">
      <h1 className="authorization__title">Login</h1>
      <form action="" className="authorization__form form">
        <div className="form__group">
          <label htmlFor="" className="form__label">Login</label>
          <input type="text" className="form__input" />
        </div>
        <div className="form__group">
          <label htmlFor="" className="form__label">Password</label>
          <input type="text" className="form__input" />
        </div>
        <div className="form__row">
          <button type="submit" className="button">Log In</button>
        </div>
      </form>
      <Link className="link" to="/sign-up">Are you have not an account ?</Link>
    </div>
  </div>
);

export default LogIn;
