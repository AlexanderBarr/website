"use client";
import { Github, Icon, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";

function Header() {
  return (
    <div className="">
      <div className="flex justify-center gap-10 bg-background p-5 ">
        {/* Left hand side */}
        <div className="">
          <Image
            className="rounded-full border-2 border-slate"
            src="/assets/profilepic.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        {/* Right hand side */}
        <div className="flex flex-col justify-center">
          <h1 className="text-accent pb-4 text-6xl">
            Full Stack Software Engineer
          </h1>
          <h3 className="text-platinum">Sydney Australia</h3>
          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={() => {
                console.log("onclick");
              }}
            >
              <Github size={30} />
            </button>
            <button
              onClick={() => {
                console.log("onclick");
              }}
            >
              <Linkedin size={30} />
            </button>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
