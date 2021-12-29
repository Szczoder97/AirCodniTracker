import Content from "./Content";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Page = () => {
  return (
    <div className="container-fluid">
      <Navbar />

      <Content />

      <Footer />
    </div>
  );
};

export default Page;
