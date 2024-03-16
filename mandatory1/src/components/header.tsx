import logo from "./assets/images/logo.png";

function header() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a
                href="/"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                title="headerLogo"
              >
                <img
                  src={logo}
                  alt="headerLogo"
                  className="object-cover h-12 w-full rounded-lg"
                />
                <span className="font-bold"></span>
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/"
              className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
            >
              Home
            </a>
            <a
              href="/"
              className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
            >
              About
            </a>
            <a
              href="/"
              className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
            >
              Clean Code
            </a>
            <a
              href="/"
              className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
            >
              Vercel
            </a>
            <a
              href="/"
              className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
            >
              Node Framework
            </a>
            <a
              href="/"
              className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
            >
              Rendering
            </a>
            <a
              href="/"
              className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
            >
              RestAPI
            </a>
            <a
              href="/"
              className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
            >
              Terminal Commands
            </a>
            <a
              href="/"
              className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default header;
