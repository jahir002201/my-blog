import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-teal-600 text-white p-4 shadow fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
