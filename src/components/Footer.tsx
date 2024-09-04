//navlink
import Link from 'next/link';
const Footer = () => {
    return (
      <footer className="bg-gray-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 My Blog. All rights reserved.</p>
          <nav className="mt-2">
            <ul className="flex justify-center space-x-4">
              <li><Link href="/" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    );
};

export default Footer;