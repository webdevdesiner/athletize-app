import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

function defaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-500 h-screen ">
      
      <div className="position-absolute z-10 fixed w-full">
      <NavBar />
      </div>
      
      <div className="mt-15">
      <Header />
      </div>

      <div className="flex-grow bg-gray-300 p-4">
      {children }
      </div>
      
      <Footer  />
    </div>
  );
} 

export default defaultLayout