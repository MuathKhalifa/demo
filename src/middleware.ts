import { NextRequest, NextResponse } from "next/server";
import { isValidPassword } from "./lib/isValidPassword";

export async function middleware(req: NextRequest) {
  if ((await isAuthenticated(req)) === false) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }
}

async function isAuthenticated(req: NextRequest) {
  const authHeader =
    req.headers.get("authorization") || req.headers.get("Authorization");

  if (authHeader == null) return false;

  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":"); //decrepting the values and spliting username and password

  isValidPassword(password, "password");
  // this returns true, if the login in ADMIN_USERNAME and entered password is equal to haspassword
  return (
    username === process.env.ADMIN_USERNAME &&
    (await isValidPassword(
      password,
      process.env.HASHED_ADMIN_PASSWORD as string
    ))
  );

  console.log("username: ", username, "password: ", password, "authheadre: ");
}

export const config = {
  matcher: "/admin/:path*", //get every page in admin and beyond i.e. even admin/product/page
};
