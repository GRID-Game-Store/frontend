import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { getAccessToken } from "@/app/utils/sessionTokenAccessor";
import { authOptions } from "../../auth/[...nextauth]/route";

import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
  const searchParams = new URLSearchParams(req.url?.split("?")[1]);
  const sessionId = searchParams.get("sessionId");
  const session = await getServerSession(authOptions);

  if (session) {
    const url = `${process.env.URL}transactions/revert?sessionId=${sessionId}`;
    let accessToken = await getAccessToken();
    const resp = await fetch(url, {
      headers: {
        Authorization: "Bearer " + accessToken,
        Origin: process.env.NEXTAUTH_URL || "",
      },
      method: "POST",
    });

    if (resp.ok) {
      const data = await resp.json();
      return NextResponse.json({ data }, { status: resp.status });
    }

    return NextResponse.json(
      { error: await resp.text() },
      { status: resp.status },
    );
  }
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
