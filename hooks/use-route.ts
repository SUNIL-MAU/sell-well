"use client";

import { Icons } from "@/components/icons";
import { useParams } from "next/navigation";
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
        href: `/${params.storeId}/billboards`,
        label: "Billboards",
        icons: Icons.billboard,
      },
      {
        href: `/${params.storeId}/sizes`,
        label: "Sizes",
        icons: Icons.size,
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
        href: `/${params.storeId}/orders`,
        label: "orders",
        icons: Icons.order,
      },
      {
        href: `/${params.storeId}/categories`,
        label: "Categories",
        icons: Icons.categories,
      },
      {
        href: `/${params.storeId}/settings`,
        label: "Settings",
        icons: Icons.setting,
      },
    ],
    []
  );

  return route;
};
