import React from 'react'
import { useState } from 'react';
import {Icon} from "@iconify/react";
import { useCookies } from 'react-cookie';
import Textinput from '../Component/shared/Textinput';
import PasswordText from '../Component/shared/PasswordText';
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedAsync } from "../utils/helper";



const Logincomponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //eslint-disable-next-line
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const Logins = async () => {
    const data = { email, password };
    const response = await makeUnauthenticatedAsync("/auth/login", data);
    const date = new Date();
    date.setDate(date.getDate() + 30);

    if (response && !response.error) {
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
          <div className="font-bold mb-7">To Continue, log in to Spotify</div>
          <Textinput
            className="pt-7"
            labelname="Email address or username"
            placeholder="Email address or username"
            value={email}
            setValue={setEmail}
          />
          <PasswordText
            labelname="Password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />
          <div className="my-5  flex items-center justify-end w-full">
            <button
              className="px-10 py-3 font-semibold rounded-full "
              style={{ backgroundColor: "rgb(0,255,67)" }}
              onClick={(e) => {
                e.preventDefault();
                Logins();
              }}
            >
              {" "}
              LOG IN
            </button>
          </div>
          <div className="w-full border border-solid border-gray-300"></div>
          <div className="py-5 font-bold">Dont have an account?</div>
          <div className="flex items-center justify-center w-full border-2 border-gray-400 rounded-full text-gray-500 py-2 font-semibold px-10">
            <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logincomponent;
