import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "../components/SearchBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
      <Header />
      <SearchBar />
      <main className="py-5 md:py-7">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
