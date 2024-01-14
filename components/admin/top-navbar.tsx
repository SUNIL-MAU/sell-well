import React from "react";
import { LogoutButton } from "@/components/auth/logout-button";
import Logo from "@/components/logo";

const TopNavbar = () => {
  return (
    <nav className="flex h-[60px] items-center justify-between border-b border-slate-6 px-6">
      <Logo />
      <div>
        <LogoutButton>logout</LogoutButton>
      </div>
    </nav>
  );
};

export default TopNavbar;
