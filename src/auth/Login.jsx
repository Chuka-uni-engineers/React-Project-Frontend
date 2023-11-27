import React from 'react';

const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="p-10 bg-gray-100 border-2 border-blue-500 rounded-2xl shadow-lg w-1/3">
                <div className="flex flex-col items-center mb-8 space-y-4">
                    <i className="fas fa-user-circle text-6xl"></i>
                    <h1 className="text-3xl font-bold uppercase">Welcome</h1>
                </div>

                <button className="btn w-full outline-gray-400 text-gray-400" type="button">
                    <i className="fa-brands fa-google"></i>
                    Sign In with Google
                </button>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/4 border-b-2 border-gray-500 lg:w-1/3"></span>
                    <span className="text-xs text-center text-gray-500 uppercase">OR</span>
                    <span className="w-1/4 border-b-2 border-gray-500 lg:w-1/3"></span>
                </div>
                <form className="mt-8 space-y-6">
                    <input type="email" placeholder="Email Address" className="input w-full input-bordered ring-2" />
                    <input type="password" placeholder="Password" className="input w-full input-bordered ring-2" />
                    <div className="flex flex-col items-center justify-between">
                        <button className="btn w-full btn-primary text-white uppercase" type="button">
                            Sign In
                        </button>
                        <a className="underline font-bold mt-4 text-xs my-2 text-secondary hover:text-primary" href="#">
                            Forgot Password?
                        </a>
                    <div className="text-center text-xs font-semibold">
                        If not a member yet,{' '}
                        <a className="inline-block underline align-baseline text-blue-500 hover:text-blue-800" href="#">
                            Create Account
                        </a>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
