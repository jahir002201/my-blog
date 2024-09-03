const Footer = () => {
    return (
      <footer className="bg-gray-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 My Blog. All rights reserved.</p>
          <nav className="mt-2">
            <ul className="flex justify-center space-x-4">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    );
};

export default Footer;