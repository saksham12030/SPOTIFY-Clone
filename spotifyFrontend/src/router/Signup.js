import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import Textinput from "../Component/shared/Textinput";
import { makeUnauthenticatedAsync } from "../utils/helper";
import { useNavigate } from "react-router-dom";
import PasswordText from "../Component/shared/PasswordText";

const Signup = () => {
  const navigate = useNavigate();
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
    <>
      <div className="w-full h-full flex flex-col items-center">
        <div className="logo flex w-full justify-center border-solid border-gray-300 border-b p-4  ">
          <Icon icon="logos:spotify" width="150" />
        </div>
        <div className="inputRegion w-1/3 py-4 justify-center flex flex-col items-center ">
          <div className="font-bold mb-7">
            Sign up for Free to Start Listening.
          </div>
          <Textinput
            labelname="Email address "
            placeholder="Enter your Email address "
            value={email}
            setValue={setEmail}
          />
          <Textinput
            labelname="Confirm Email address "
            placeholder="Enter your Email Again "
            value={confirmEmail}
            setValue={setConfirm}
          />
          <Textinput
            labelname="Username"
            placeholder="Enter your Username "
            value={username}
            setValue={setUsername}
          />
          <PasswordText
            labelname="Create Password"
            placeholder="Enter a Strong Password here"
            value={password}
            setValue={setPassword}
          />
          <div className="flex w-full pt-2 item-center space-x-4">
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
          <div className="my-5  flex items-center justify-center w-full">
            <button
              className="px-10 py-3 font-semibold rounded-full "
              style={{ backgroundColor: "rgb(0,255,67)" }}
              onClick={(e) => {
                e.preventDefault();
                signup();
              }}
            >
              Sign UP
            </button>
          </div>
          <div className="w-full border border-solid border-gray-300"></div>
          <div className="py-5 font-bold">Already have an Account?</div>
          <div className="flex items-center justify-center w-full border-2 border-gray-400 rounded-full text-gray-500 py-2 font-semibold px-10">
            <Link to="/login">LOGIN INSTEAD</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
