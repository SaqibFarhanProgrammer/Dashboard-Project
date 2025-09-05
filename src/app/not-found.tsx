import Link from 'next/link';
import Image from 'next/image';
import GoBackButton from './components/GoBackButton'; 

export default function NotFound() {
  return (
    <div className="min-h-screen flex   items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/Fav.png"
                alt="InfoSphere Logo"
                width={80}
                height={80}
                className="mx-auto rounded-full shadow-md"
              />
            </div>
            
            <div className="mb-6">
              <h1 className="text-9xl font-bold text-indigo-600">404</h1>
              <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
              <p className="text-gray-600 mt-2">
                Oops! The page you're looking for seems to have wandered off into the digital void.
              </p>
            </div>

            <div className="mb-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    What would you like to do?
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <i className="ri-home-4-line"></i>
                Go Home
              </Link>
              
              <GoBackButton />
            </div>

            <div className="mt-8">
              <p className="text-gray-500 text-sm">
                Need help?{' '}
                <Link href="/support" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Contact Support
                </Link>
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 py-4 px-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} InfoSphere. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}