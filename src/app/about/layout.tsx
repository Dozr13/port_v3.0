import Scrolling from "../../components/Scrolling";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Scrolling />
      </nav>
      <main>{children}</main>
    </>
  );
}
