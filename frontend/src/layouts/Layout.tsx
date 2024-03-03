import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "../components/SearchBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <SearchBar />
      <main className="py-2 md:py-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
