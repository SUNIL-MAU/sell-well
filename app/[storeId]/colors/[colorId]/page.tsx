import { ColorForm } from "./components/color-form";
import { db } from "@/lib/db";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  let color = null;
  if (params.colorId !== "new") {
    color = await db.color.findUnique({
      where: {
        id: params.colorId,
      },
    });
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};

export default ColorPage;
