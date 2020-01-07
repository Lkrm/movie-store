import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => (
  <div className="authorization">
    <div className="authorization__wrap">
      <h1 className="authorization__title">Sign up</h1>
      <form action="" className="authorization__form form">
        <div className="form__group">
          <label htmlFor="" className="form__label">Login</label>
          <input type="text" className="form__input" />
        </div>
        <div className="form__group">
          <label htmlFor="" className="form__label">Email</label>
          <input type="text" className="form__input" />
        </div>
        <div className="form__group">
          <label htmlFor="" className="form__label">Password</label>
          <input type="text" className="form__input" />
        </div>
        <div className="form__group">
          <label htmlFor="" className="form__label">Repeat password</label>
          <input type="text" className="form__input" />
        </div>
        <div className="form__row">
          <button type="submit" className="button">Sign Up</button>
        </div>
      </form>
      <Link className="link" to="/log-in">Are you already have an account ?</Link>
    </div>
  </div>
);

export default SignUp;
