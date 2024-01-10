import React from "react";
import { LogoutButton } from "@/components/auth/logout-button";

const TopNavbar = () => {
  return (
    <nav className="flex h-[60px] items-center justify-between border-b border-slate-6 px-6">
      <div>logo</div>
      <div>
        <LogoutButton>logout</LogoutButton>
      </div>
    </nav>
  );
};

export default TopNavbar;
