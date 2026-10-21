import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClicks } from "@/lib/mongodb";

export async function POST(
  _req: Request,
  { params }: { params: { id: string } },
) {
  if (!links.some((l) => l.id === params.id)) {
    return NextResponse.json({ error: "unknown link" }, { status: 404 });
  }
  try {
    const clicks = await getClicks();
    if (!clicks) return NextResponse.json({ ok: false }, { status: 503 });
    await clicks.updateOne(
      { _id: params.id },
      { $inc: { count: 1 } },
      { upsert: true },
    );
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
