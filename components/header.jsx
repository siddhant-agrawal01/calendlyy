import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { checkUser } from "@/lib/checkUser";
import UserMenu from "./user-menu";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { RainbowButton } from "./ui/rainbow-button";

async function Header() {
  await checkUser();

  return (
    <nav className="mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2"  style={{
      backdropFilter: "blur(30px)",
      backgroundColor: "rgba(255, 255, 255, 0.02)", // Light background with transparency
    }}>
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          width={80}
          height={20}
          alt="Schedulrr Logo"
          className="h-14 w-auto"
        />
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/events?create=true">
         
          <RainbowButton className="flex items-center gap-2">create Event</RainbowButton>
        </Link>
        <ModeToggle />
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </nav>
  );
}

export default Header;
