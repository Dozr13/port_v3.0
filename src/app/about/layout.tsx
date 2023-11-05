import Scrolling from "../../components/client-side/scrolling";

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
