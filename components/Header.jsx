import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/logo.png"
                  alt="Clipcoin Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-2xl font-bold text-blue-600">
                  <span className="text-gray-800">Clip</span>coin
                </span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link href="#about" className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link href="#buy" className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Buy
            </Link>
            <Link href="#chart" className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Chart
            </Link>
            <Link href="#community" className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Community
            </Link>
          </nav>
          
          <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
            <a
              href="https://app.uniswap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 btn-cta"
            >
              Buy on Uniswap
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
