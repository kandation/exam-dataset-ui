import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { dbx } from "../../libs/database/db";

export const GET: RequestHandler = async () => {
  dbx();
  return new json({ asdasd: "dd" });
};
