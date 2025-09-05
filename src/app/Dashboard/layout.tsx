import Navbar from '../components/Navbar'
import TopNavbar from '../components/TopNavbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="main-container flex h-screen bg-gray-50">
      <div className="sidebar-container">
        <Navbar />
      </div>
      
      <div className="main-content flex flex-col flex-grow">
        <TopNavbar />
        <div className="content-area flex-grow p-6 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  )
}