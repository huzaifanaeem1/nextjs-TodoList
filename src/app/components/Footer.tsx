import React from 'react';
import Link from "next/link";


import { IoLogoFacebook } from 'react-icons/io5';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
export default function Footer() {
  return (
    <div>
      <footer className="bg-white/10  body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
            href={"/"}
          >
            <span className="ml-3 text-xl font-bold text-black ">
            Todo List
            </span>
          </Link>
          <p className="text-md text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0 mt-4">
            © 2024 Huzaifa Naeem 
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://www.facebook.com/profile.php?id=100084760552740&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer">
              <IoLogoFacebook className="w-8 h-8 hover:text-black hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-4"
            href="https://x.com/Huzai_fa123?t=DnFYfJoMreRFqN08hnQP6A&s=09"
            target="_blank"
            rel="noopener noreferrer">
              <FaXTwitter className="w-8 h-8  hover:text-black hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-4"
            href="https://www.instagram.com/__.zefa.__?igsh=a2J4a3dvcWF2Njg5"
            target="_blank"
            rel="noopener noreferrer">
              <AiFillInstagram className="w-8 h-8  hover:text-black  hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-4"
            href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer">
              <FaLinkedinIn  className="w-8 h-8  hover:text-black  hover:scale-110 transform transition duration-400" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
