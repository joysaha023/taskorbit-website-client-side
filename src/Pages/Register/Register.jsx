import axios from "axios";
import React, { useContext, useState } from "react";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createuser, updateUserProfile, googleSignin } = useAuth();
  const [passwordError, setPasswordError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.photo.value;
    const role = form.role.value;
    let coin = role === "worker" ? 10 : 50;
    console.log(name, email, password, image, role, coin);

    setPasswordError("");

    if (password.length == "") {
      setPasswordError("Password field is required");
      return;
    } else if (password.length < 6) {
      setPasswordError("Password should be 6 character or longer ");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("add at least one uppercase later");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("add at least one lowercase later");
      return;
    }

    //create user
    createuser(email, password)
      .then((result) => {
        updateUserProfile(name, image).then(() => {
          console.log(result.user);
          toast.success('registration successfully')
        });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error('email exist')
      });
  };

  const handleGoogle = () => {
    googleSignin()
    .then(result => {
        console.log(result.user)
        toast.success("Login success")
    })
    .catch()
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to TaskOrbit</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            {/* <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div> */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="block mb-2 text-sm">
                  Password
                </label>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {/* <span  className="relative -top-7 left-64 lg:left-72   text-gray-600" onClick={() => setShowPassword(!showPassword)}>{showPassword ? (<FaRegEyeSlash />) : (<FaRegEye />)}</span> */}
                {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
              </div>
            </div>
            <div>
              <label className="text-sm mb-2">Role</label>
              <select
                name="role"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                required
              >
                <option value="">Select Role</option>
                <option value="worker">Worker</option>
                <option value="TaskCreator">Task Creator</option>
              </select>
            </div>
          </div>

          <div>
            <button
              //  disabled={loading}
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
              {/* {loading ? <TbFidgetSpinner className='animate-spin m-auto' /> : "Continue"} */}
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button onClick={handleGoogle} className="disabled:cursor-not-allowed cursor-pointer flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
