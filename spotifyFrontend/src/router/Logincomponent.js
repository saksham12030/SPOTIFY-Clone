import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useCookies } from "react-cookie";
import Textinput from "../Component/shared/Textinput";
import PasswordText from "../Component/shared/PasswordText";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedAsync } from "../utils/helper";

const Logincomponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const Logins = async () => {
    const data = { email, password };
     if (
       !email ||
       !password
     ) {
       alert("All fields are required!");
       return; // Stop execution if any field is empty
     }
    const response = await makeUnauthenticatedAsync("/auth/login", data);
    const date = new Date();
    date.setDate(date.getDate() + 30);

    if (response && !response.error) {
      setCookie("token", response.token, { path: "/", expires: date });
      alert("Success");
      navigate("/");
    } else {
      alert("Failure");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4">
      {/* Logo */}
      <div className="flex w-full justify-center border-b border-gray-300 p-4">
        <Icon icon="logos:spotify" width="120" className="md:w-150" />
      </div>

      {/* Input Section */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mt-8 flex flex-col items-center">
        <h2 className="font-bold text-lg md:text-xl mb-6 text-center">
          To Continue, log in to Spotify
        </h2>

        {/* Email Input */}
        <Textinput
          className="w-full"
          labelname="Email address or username"
          placeholder="Enter your email or username"
          value={email}
          setValue={setEmail}
        />

        {/* Password Input */}
        <PasswordText
          className="w-full mt-4"
          labelname="Password"
          placeholder="Enter your password"
          value={password}
          setValue={setPassword}
        />

        {/* Login Button */}
        <button
          className="w-full bg-green-500 hover:bg-green-800 text-white font-semibold rounded-full py-3 mt-6 transition duration-300"
          onClick={(e) => {
            e.preventDefault();
            Logins();
          }}
        >
          LOG IN
        </button>

        {/* Divider */}
        <div className="w-full border-t border-gray-300 my-6"></div>

        {/* Signup Section */}
        <p className="font-bold text-gray-700 text-sm md:text-base">
          Don't have an account?
        </p>
        <Link
          to="/signup"
          className="mt-4 w-full text-center text-gray-500 border border-gray-400 rounded-full py-2 font-semibold transition duration-300 hover:bg-gray-100"
        >
          SIGN UP FOR SPOTIFY
        </Link>
      </div>
    </div>
  );
};

export default Logincomponent;
