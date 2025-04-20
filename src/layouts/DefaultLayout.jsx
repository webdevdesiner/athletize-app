import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

function defaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-500 h-screen">
      <NavBar />
      <Header />
      <div className="flex-grow bg-gray-400 p-4">
      {children }
      </div>
      
      <Footer  />
    </div>
  );
} 

export default defaultLayout