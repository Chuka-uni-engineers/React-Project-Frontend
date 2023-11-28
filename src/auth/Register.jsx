import React from "react";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="m-3 p-3 sm:p-4 md:p-10 bg-gray-100 border-2 border-blue-500 rounded-2xl shadow-lg max-w-sm w-full sm:w-1/2 md:w-1/3">
        <div className="flex flex-col items-center mb-8 space-y-4">
          <i className="fa-brands text-6xl fa-google-wallet"></i>
          <h1 className="text-3xl font-bold">Chuka Auth</h1>
        </div>

        <button
          className="btn w-full outline-gray-400 text-gray-400"
          type="button"
        >
          <i className="fa-brands fa-google"></i>
          Sign Up with Google
        </button>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/4 border-b-2 border-gray-500 lg:w-1/3"></span>
          <span className="text-xs text-center text-gray-500 uppercase">
            OR
          </span>
          <span className="w-1/4 border-b-2 border-gray-500 lg:w-1/3"></span>
        </div>
        <form className="mt-8 space-y-6">
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered ring-2"
            />
            <button className="absolute top-3 right-3 hover:text-primary btn-xs">
              <i className="text-sm fa fa-user-circle"></i>
            </button>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="New Password"
              className="input w-full input-bordered ring-2"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="input w-full input-bordered ring-2 mt-4"
            />

            <button className="absolute top-3 right-3 hover:text-primary btn-xs">
              <i className="text-sm fa fa-eye"></i>
            </button>
          </div>
          <div className="flex flex-col items-center justify-between">
            <button
              className="btn w-full btn-primary text-white uppercase"
              type="button"
            >
              Sign Up
            </button>
            {/* <a
              className="underline font-bold mt-4 text-xs my-2 text-secondary hover:text-primary"
              href="#"
            >
              Forgot Password?
            </a> */}
            <div className="text-center text-xs font-semibold">
              Already have an Account?,{" "}
              <a
                className="inline-block underline align-baseline text-blue-500 hover:text-blue-800"
                href="#"
              >
                Sign in
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
