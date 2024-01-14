import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
type drawerProps = {
  label: string;
  description: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
};

const Drawer = ({ children, label, description, trigger }: drawerProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{label}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
          <div>{children}</div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
