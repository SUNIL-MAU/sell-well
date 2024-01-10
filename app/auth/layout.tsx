import Container from "@/components/container";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className=" relative  h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 " />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              src="/authenticationabnner.svg"
              width={1280}
              height={843}
              alt="Authentication"
              className="h-full"
            />
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex px-5 sm:px-0 flex-col justify-center space-y-6 w-[350px]">
            {children}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AuthLayout;
