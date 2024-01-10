"use client";

import { Button } from "@/components/ui/button";
import { useStoreModal } from "@/hooks/use-store-modal";

const CreateStoreButton = () => {
  const storeModal = useStoreModal();
  return (
    <div className="flex w-full justify-center my-4">
      <Button variant={"default"} onClick={() => storeModal.onOpen()}>
        Create store
      </Button>
    </div>
  );
};

export default CreateStoreButton;
