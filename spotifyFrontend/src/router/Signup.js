import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Textinput from "../Component/shared/Textinput";
import { makeUnauthenticatedAsync } from "../utils/helper";
import PasswordText from "../Component/shared/PasswordText";
import { backend } from "../utils/scripter";

const Signup = () => {
  const navigate = useNavigate();
  console.log(backend);
  //eslint-disable-next-line
  const [cookie, setCookie] = useCookies(["token"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmEmail, setConfirm] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const signup = async () => {
    if (email !== confirmEmail) {
      alert("Your email and confirm Email should be matched");
      return;
    }
     if (
       !firstname ||
       !lastname ||
       !email ||
       !confirmEmail ||
       !username ||
       !password
     ) {
       alert("All fields are required!");
       return; // Stop execution if any field is empty
     }
      if (email !== confirmEmail) {
        alert("Your email and confirm Email should match!");
        return;
      }
    const data = { firstname, lastname, email, username, password };
    const response = await makeUnauthenticatedAsync("/auth/register", data);
    const date = new Date();
    date.setDate(date.getDate() + 30);

    if (response) {
      console.log(response);
      const token = response.token;
      setCookie("token", token, { path: "/", expires: date });
      alert("Success");
      navigate("/");
    } else {
      alert("failure");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4">
      <div className="w-full flex justify-center border-b border-gray-300 p-4">
        <Icon icon="logos:spotify" width="120" className="md:w-150" />
      </div>
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 mt-8 flex flex-col items-center">
        <h2 className="font-bold text-lg md:text-xl mb-6 text-center">
          Sign up for Free to Start Listening
        </h2>
        <Textinput
          labelname="Email address"
          placeholder="Enter your Email"
          value={email}
          setValue={setEmail}
        />
        <Textinput
          labelname="Confirm Email"
          placeholder="Confirm your Email"
          value={confirmEmail}
          setValue={setConfirm}
        />
        <Textinput
          labelname="Username"
          placeholder="Enter your Username"
          value={username}
          setValue={setUsername}
        />
        <PasswordText
          labelname="Create Password"
          placeholder="Enter a Strong Password"
          value={password}
          setValue={setPassword}
        />
        <div className="flex flex-col md:flex-row w-full gap-4 pt-2">
          <Textinput
            labelname="First Name"
            placeholder="Enter your First name"
            value={firstname}
            setValue={setFirstname}
          />
          <Textinput
            labelname="Last Name"
            placeholder="Enter your Last name"
            value={lastname}
            setValue={setLastname}
          />
        </div>
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full py-3 mt-6 transition duration-300"
          onClick={signup}
        >
          Sign UP
        </button>
        <div className="w-full border-t border-gray-300 my-6"></div>
        <p className="font-bold text-gray-700 text-sm md:text-base">
          Already have an account?
        </p>
        <Link
          to="/login"
          className="mt-4 w-full text-center text-gray-500 border border-gray-400 rounded-full py-2 font-semibold transition duration-300 hover:bg-gray-100"
        >
          LOGIN INSTEAD
        </Link>
      </div>
    </div>
  );
};

export default Signup;
