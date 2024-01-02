"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="mt-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className={cn("flex flex-col gap-3 mt-4")}>
        <Button
          variant="outline"
          type="button"
          onClick={() => onClick("google")}
        >
          <Icons.google />
          Google
        </Button>
        {/* <Button
          variant="outline"
          type="button"
          onClick={() => onClick("github")}
        >
          <Icons.facebook />
          Facebook
        </Button> */}
      </div>
    </div>
  );
};

export default Social;
