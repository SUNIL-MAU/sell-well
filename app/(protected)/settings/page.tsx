import { auth } from "@/auth";
import { LogoutButton } from "@/components/auth/logout-button";

import React from "react";

const page = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <LogoutButton>logout</LogoutButton>
    </div>
  );
};

export default page;
