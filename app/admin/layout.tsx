import Container from "@/components/container";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default AuthLayout;
