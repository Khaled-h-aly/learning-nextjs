import SideNav from "../ui/components/sidenav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      
      <SideNav />
          <h1>Blog</h1><hr />
          {children}
      </>
  );
}
