// src/app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "InfoSphere Dashboard",
  description: "Dashboard for InfoSphere application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://www.pinterest.com/pin/484770347411826475/"
      />
      <title>Default Title</title>
      <body className={poppins.className} suppressHydrationWarning>
        <div className="flex">
          <aside className="fixed top-0 left-0 w-64 h-screen z-50 bg-white shadow">
            <Navbar />
          </aside>
          <div className="flex-1 flex flex-col ml-64">
            <header className="fixed top-0 left-64 right-0 h-16 z-40 bg-white shadow flex items-center">
              <TopNavbar />
            </header>
            <main className="flex-1 p-6 pt-20 bg-gray-50 min-h-screen">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
