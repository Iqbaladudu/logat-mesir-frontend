import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
	const url = req.nextUrl.clone();
	const { token } = req.cookies;
}
