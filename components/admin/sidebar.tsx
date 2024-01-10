"use client";

import StoreSwitcher from "./store-switcher";
import MenuItem from "./menu-item";
import { useRoute } from "@/hooks/use-route";

export function Sidebar() {
  const routes = useRoute();

  return (
    <div className="pb-12">
      <div className="space-y-4 ">
        <StoreSwitcher items={[]} />
        <div className="px-3 py-2">
          {routes.map((route, index) => (
            <MenuItem key={index} {...route} />
          ))}
        </div>
      </div>
    </div>
  );
}
