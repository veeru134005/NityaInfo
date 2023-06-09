import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function ForgetPasswordPage() {
  return (
    <div className="text-center m-5-auto">
      <h2>Reset your password</h2>
      <h5>Enter your email address and we will send you a new password</h5>
      <form action="/login">
        <p>
          <label id="reset_pass_lbl">Email address</label>
          <br />
          <input type="email" name="email" required />
        </p>
        <Link to="/login">
          <div className="col forgot">Back to Log In Page</div>
        </Link>
        <p>
          <button id="sub_btn" type="submit">
            Send password reset email
          </button>
        </p>
      </form>
    </div>
  );
}
