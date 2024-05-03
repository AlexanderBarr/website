import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="h-2000">
      <div className="flex">
        {/* Left hand side */}
        <div className="">
          <Image
            className="border-slate rounded-full border-2"
            src="/assets/profilepic.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        {/* Right hand side */}
        <div className="flex flex-col">
          <h1>Full Stack Software Engineer</h1>
          <h3>Sydney Australia</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
