"use client";

import { Icons } from "@/components/icons";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

export const useRoute = () => {
  const params = useParams();

  const route = useMemo(
    () => [
      {
        href: `/${params.storeId}/dashboard`,
        label: "Dashboard",
        icons: Icons.dashboard,
      },
      {
        href: `/${params.storeId}/products`,
        label: "Products",
        icons: Icons.products,
      },
      {
        href: `/${params.storeId}/colors`,
        label: "Colors",
        icons: Icons.colors,
      },
      {
        href: `/${params.storeId}/products`,
        label: "Products",
        icons: Icons.products,
      },
      {
        href: `/${params.storeId}/categories`,
        label: "Categories",
        icons: Icons.categories,
      },
    ],
    []
  );

  return route;
};
