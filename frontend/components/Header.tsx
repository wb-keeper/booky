import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {
  getKindeServerSession,
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import Dropdown from "@/components/Dropdown";
import MobileNav from "@/components/MobileNav";

const socials = [
  { icon: <FaYoutube />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaFacebook />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
];

const Header = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  const user = await getUser();

  return (
    <header className="py-6 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="flex items-center gap-5 justify-center xl:w-max">
            <Link href={"/"}>
              <Image src="logo.svg" width={160} height={160} alt="logo" />
            </Link>

            <div className="w-[1px] h-[40px] bg-gray-300"></div>
            <div className="flex gap-2">
              {socials.map((social, index) => (
                <Link
                  href={social.href}
                  key={index}
                  className="bg-accent text-white hover:bg-accent-hover text-sm w-[28px] h-[28px] flex items-center justify-center rounded-full transition-all"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-8 xl:w-max">
            <div className="flex items-center gap-2 xl:order-2">
              {isUserAuthenticated ? (
                <Dropdown user={user}></Dropdown>
              ) : (
                <div className="flex gap-2">
                  <LoginLink>
                    <Button variant="primary">Sign in</Button>
                  </LoginLink>
                  <RegisterLink>
                    <Button>Register</Button>
                  </RegisterLink>
                </div>
              )}
            </div>
            <div className="xl:hidden">
              <MobileNav />
            </div>
            <div className="hidden xl:flex">desktop nav</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
