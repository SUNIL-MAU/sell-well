"use client";

import StoreSwitcher from "./store-switcher";
import MenuItem from "./menu-item";
import { useRoute } from "@/hooks/use-route";
import { Store } from "@prisma/client";

export function Sidebar({ stores }: { stores: Store[] }) {
  const routes = useRoute();

  return (
    <div className="pb-12">
      <div className="space-y-4 ">
        <StoreSwitcher items={stores} />
        <div className="px-3 py-2">
          {routes.map((route, index) => (
            <MenuItem key={index} {...route} />
          ))}
        </div>
      </div>
    </div>
  );
}
