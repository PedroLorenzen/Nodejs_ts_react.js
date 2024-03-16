const header = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a
                href="/"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                title="headerLogo"
              >
                <img
                  src="mandatory1/public/assets/images/logo.png"
                  alt="headerLogo"
                />
                <span className="font-bold"></span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#"
              className="py-5 px-3 hover:bg-gray-700 hover:text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="py-5 px-3 hover:bg-gray-700 hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              className="py-5 px-3 hover:bg-gray-700 hover:text-white"
            >
              Services
            </a>
            <a
              href="#"
              className="py-5 px-3 hover:bg-gray-700 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default header;
