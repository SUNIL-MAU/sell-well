"use server";

import { getUserById } from "@/data/user";
import { db } from "@/lib/db";
import { StoreSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import * as z from "zod";

export const createStore = async (
  values: z.infer<typeof StoreSchema>,
  userId: string
) => {
  const validatedFields = StoreSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const user = await getUserById(userId);

  if (!user) {
    return { error: "Unauthorized" };
  }

  const { name } = validatedFields.data;
  const store = await db.store.create({
    data: {
      name,
      userId,
    },
  });
  revalidatePath("/admin");

  return { success: "Store created!", store };
};
