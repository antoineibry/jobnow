import React from "react";
import Image from "next/image";

const locationOptions = ["Beirut", "Zahle", "Akkar"];

const NavBar = () => {
  return (
    <>
      <section className=" bg-gray h-[600px] grid grid-flow-col grid-cols-12 text-black">
        <div className="bg-gray col-span-7">
          <div className="flex flex-row w-full justify-center items-center 2xl:container mx-auto mt-11">
            <div className="flex items-center">
              <a href="#">
                <Image
                  src="/Section1/logo.svg"
                  width={120}
                  height={50}
                  alt="logo"
                  className="mx-12"
                />
              </a>
            </div>
            <ul className="flex flex-row justify-between font-medium text-s">
              <li className="pr-16 min-w-fit">
                <a href="#">Home</a>
              </li>
              <li className="pr-16 min-w-fit">
                <a href="#">Job</a>
              </li>
              <li className="pr-16 min-w-fit">
                <a href="#">About Us</a>
              </li>
              <li className="pr-16 min-w-fit">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className=" font-extrabold text-5xl text-center mt-28">
              Search, Find, & Apply
            </div>
            <div className=" font-medium text-lg text-left mt-5 px-32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              lacus non orci euismod vestibulu virae ut ex. Quisque ut arcu at
              lectus tristique auctor sit amet at turpis.
            </div>
            <div className=" rounded-2xl bg-white py-3 px-7 mx-32 flex justify-between flex-row w-3/4 mt-10">
              <div className="flex-row flex">
                <Image
                  src="/Section1/search-icon.png"
                  width={20}
                  height={15}
                  className="my-3"
                />
                <input
                  placeholder="Job title or Keyword"
                  name="job"
                  className="ml-3 text-m "
                />
              </div>

              <div className="flex-row flex">
                <Image
                  src="/Section1/location-icon.png"
                  width={20}
                  height={15}
                  className="my-3"
                />
                <select
                  id="countries"
                  class="text-gray-900 text-m rounded-lg w-full"
                >
                  <option selected>Location</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div className="py-0">
                <button className="px-8 py-2 rounded-xl bg-green text-white font-medium">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green col-span-5 rounded-bl-3xl relative">
          <div className="flex flex-row w-full justify-center items-center 2xl:container mx-auto mt-8">
            <div className="text-white mr-10 font-medium">Sign In</div>
            <div className="flex-row flex items-center bg-white rounded-xl px-4 font-semibold">
              <Image
                src="/Section1/door-icon.png"
                width={20}
                height={15}
                className="my-3 mr-2"
              />
              <div>Create Account</div>
            </div>
          </div>
          <Image
            src="/Section1/icon1.png"
            width={70}
            height={70}
            className="absolute top-32 left-24"
          />
          <Image
            src="/Section1/icon2.png"
            width={70}
            height={70}
            className="absolute top-64 right-24"
          />

          <Image
            src="/Section1/icon3.png"
            width={70}
            height={70}
            className="absolute top-96 left-16"
          />
        </div>
      </section>
    </>
  );
};

export default NavBar;
