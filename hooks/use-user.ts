'use client'

import { useSession } from "next-auth/react";

export const useUser = () => {
  const session = useSession();

  if (!session) return null;

  return session.data?.user;
};
