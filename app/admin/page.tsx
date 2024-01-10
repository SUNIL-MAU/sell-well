import Image from "next/image";
import React from "react";
import { redirect } from "next/navigation";

import CreateStoreButton from "@/components/admin/create-store";
import { auth } from "@/auth";
import { getStoreByUserId } from "@/data/store";

const page = async () => {
  // const session = await auth();
  // if (!session) return;
  // const store = await getStoreByUserId(session?.user?.id);

  return (
    <div className=" flex flex-col justify-center ">
      <div className="relative z-20 flex items-center w-full justify-center ">
        <Image
          src="/EmptyIllustration.svg"
          width={500}
          priority
          height={500}
          alt="Authentication"
          className="h-full"
        />
      </div>
      <h3 className="text-center text-2xl font-semibold mt-3">
        No stores found! please create a store.
      </h3>

      <CreateStoreButton />
    </div>
  );
};

export default page;
