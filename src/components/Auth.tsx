import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@qq07/bloggle-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

//TODO: seperate signin and signup components
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  console.log(type);
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async () => {
    console.log(postInputs);
    try {
      const response = await axios.post(
        BACKEND_URL + "/user/" + type,
        postInputs
      );
      const res = response.data;
      console.log(res.jwt);
      localStorage.setItem("token", res.jwt);
      navigate("/blogs");
    } catch (err) {
      console.log(err);
      //alert
      //TODO toast
    }
  };
  // const [postInputs, setUsername] =useState("")
  return (
    <>
      <div className="h-screen flex justify-center ">
        <div className="flex w-1/2 justify-center flex-col">
          <div className="text-3xl font-extrabold ">
            {type === "signin" ? "Welcome Back.." : "Create an Account"}
          </div>
          <div className="text-slate-400 mt-1 mb-6">
            {type === "signin"
              ? "Don't have an account?"
              : "Already have an Account?"}
            <Link
              className="pl-2 underline"
              to={type === "signin" ? "/signup" : "/signin"}
            >
              {type === "signin" ? "Sign up" : "Log in"}
            </Link>
          </div>
          {type === "signup" ? (
            <LabelledInput
              label="Name"
              placeholder="Rohan Vaidya"
              onChange={(e) => {
                setPostInputs((c) => {
                  return { ...c, name: e.target.value };
                });
              }}
            ></LabelledInput>
          ) : null}
          <LabelledInput
            label="Email"
            placeholder="me@rohanvaidya.tech"
            onChange={(e) => {
              setPostInputs((c) => {
                return { ...c, email: e.target.value };
              });
            }}
          ></LabelledInput>
          <LabelledInput
            label="Password"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPostInputs((c) => {
                return { ...c, password: e.target.value };
              });
            }}
          ></LabelledInput>

          <button
            onClick={handleSubmit}
            type="button"
            className="text-white bg-black w-full hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-4 "
          >
            {type === "signin" ? "Sign in" : "Sign up"}
          </button>
        </div>
      </div>
    </>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div className="my-2">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type || "text"}
        name="email"
        
        onChange={onChange}
        className="bg-gray-50 border w-full border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 "
        placeholder={placeholder}
        required={true}
      />
    </div>
  );
}
