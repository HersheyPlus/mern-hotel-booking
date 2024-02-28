import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <main className="py-2 md:py-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
