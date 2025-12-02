import { Link } from "react-router";

const Login = () => {
  return (
    <div className="">
      <fieldset className="fieldset w-xs">
        <h1 className="text-center font-bold text-2xl">Welcome Back</h1>
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />
        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />
        <div>
          <Link to="/" className="link link-hover">
            Forgot password?
          </Link>
        </div>
        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </div>
  );
};

export default Login;
