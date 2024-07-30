import React from "react";
import { Link } from "react-router-dom";

export default function RequestADemo({ title, paragraph, btnText }) {
  return (
    <>
      <div className="bg-Creem py-20 flex justify-center align-middle text-center">
        <div className="container mb-4">
          <h2 className="text-[32px] font-bold my-4">{title}</h2>
          <div className="flex justify-center ">
            <p className="text-md text-center font-light">{paragraph}</p>
          </div>
          <div>
            <Link to="/">
              <button className="border-1 bg-black hover:bg-DarkGray transition text-white rounded-full my-7 px-[27px] py-[15px] font-semibold borderBlueBtn">
                {btnText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
