import { Nav, NavLink } from "@/components/Nav";
export const dynamic = "force-dynamic"; // force nextjs to not cache anypage

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/admin">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/order">My orders</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}
