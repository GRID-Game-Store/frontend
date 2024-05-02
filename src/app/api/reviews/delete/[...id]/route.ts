import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { getAccessToken } from "@/app/utils/sessionTokenAccessor";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);

  if (session && req.url) {
    const url = `${process.env.URL}${req.url.split("/api/")[1]}`;
    let accessToken = await getAccessToken();

    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        charset: "utf-8",
        Authorization: "Bearer " + accessToken,
        Origin: process.env.NEXTAUTH_URL || "",
      },
      method: "DELETE",
    });

    if (resp.ok) {
      const data = await resp.json();
      return NextResponse.json({ data }, { status: resp.status });
    }

    return NextResponse.json(
      { error: await resp.text() },
      { status: resp.status }
    );
  }
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
