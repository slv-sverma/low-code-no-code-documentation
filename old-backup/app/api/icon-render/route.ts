import { NextResponse } from "next/server";
import JSON from "../../../components/data/common/IconListJson.json";
export const GET = () => {
  return NextResponse.json(JSON);
};
