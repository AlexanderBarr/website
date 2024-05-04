// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import { SimpleUploadButton } from "./simple-upload-button";
import { Home } from "lucide-react";
export function TopNav() {
  return (
    <nav className=" flex w-full items-center justify-between  p-4 text-xl font-semibold">
      <div className="flex w-full flex-row items-center justify-between gap-4">
        <div>
          <a href="">
            <Home size={30} />
          </a>
        </div>
        <div className="flex justify-between gap-4">
          <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a>
        </div>
      </div>
    </nav>
  );
}
