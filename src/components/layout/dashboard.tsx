import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
      <div className="sticky top-0 z-[1000]">
        <Navbar />
      </div>
      <main className="flex-grow w-full max-w-[240mm] mx-auto bg-white shadow-xl my-8 p-[10px] min-h-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}