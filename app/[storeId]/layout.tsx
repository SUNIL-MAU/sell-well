import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { getStoreByUserId } from "@/data/store";
import Container from "@/components/container";
import { Sidebar } from "@/components/admin/sidebar";
import TopNavbar from "@/components/admin/top-navbar";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) return;
  const store = await getStoreByUserId(session?.user?.id);

  if (!store) {
    redirect(`/admin`);
  }

  return (
    <Container>
      <div className=" flex  h-full w-full">
        <div className=" w-[250px] h-screen border-r">
          <Sidebar />
        </div>
        <div className=" flex-1 ">
          <TopNavbar />
          <div className=" mx-auto max-w-5xl px-6">{children}</div>
        </div>
      </div>
    </Container>
  );
};

export default layout;
