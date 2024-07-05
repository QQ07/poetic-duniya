/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

function Createe() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();
  return (
    <div className="p-16">
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        aria-describedby="helper-text-explanation"
        className=" m-2 text-gray-900  rounded-lg focus-visible:outline-0 block w-full p-2.5 text-4xl"
        placeholder="Title"
      />

      <textarea
        rows="10"
        onChange={(e) => {
          setContent(e.target.value);
        }}
        className="block p-2.5 w-full text-sm my-5 text-gray-900  rounded-lg border border-gray-100 focus-visible:outline-0 "
        placeholder="Write your thoughts here..."
      ></textarea>
      <button
        onClick={async () => {
          const res = await axios.post(
            `${BACKEND_URL}/blog/create`,
            {
              title,
              content,
            },
            {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
              },
            }
          );
          console.log(res);
          if (res.status == 200) {
            navigate("/blogs");
          }
        }}
        type="button"
        className="text-white bg-green-700  mt-6 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
      >
        Post
      </button>
    </div>
  );
}

export default Createe;
