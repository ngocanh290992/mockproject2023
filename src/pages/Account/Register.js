import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body">
              <div className="row">
                  <div className="py-5 px-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Register</h1>
                    </div>

                    <form className="user">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          placeholder="Password"
                        />
                      </div>
                      <a
                        href="index.html"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Register
                      </a>
                    </form>
                    <hr />

                    <div className="text-center">
                      <Link className="small" href="register.html">
                        Have an account? Login here!
                      </Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;