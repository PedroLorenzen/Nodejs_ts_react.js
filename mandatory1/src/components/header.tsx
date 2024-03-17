import logo from '../assets/images/logo.png';

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
                        <div>
                            <a
                                href="/"
                                className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
                            >
                                Home
                            </a>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
                            >
                                About
                            </a>
                        </div>
                        <div className="relative group">
                            <a
                                href="/"
                                className="py-5 px-3 hover:bg-gray-700 hover:text-white"
                            >
                                <button type="button">Clean Code</button>
                            </a>
                            <div className="absolute hidden group-hover:block bg-gray-700 rounded-lg mt-4">
                                <a
                                    href="#esLint"
                                    className="block py-2 px-4 hover:bg-gray-600 hover:text-white hover: rounded-lg"
                                >
                                    ESLint
                                </a>
                                <a
                                    href="#prettier"
                                    className="block py-2 px-4 hover:bg-gray-600 hover:text-white hover: rounded-lg"
                                >
                                    Prettier
                                </a>
                                <a
                                    href="#promises"
                                    className="block py-2 px-4 hover:bg-gray-600 hover:text-white hover: rounded-lg"
                                >
                                    Promises
                                </a>
                                <a
                                    href="#functions"
                                    className="block py-2 px-4 hover:bg-gray-600 hover:text-white hover: rounded-lg"
                                >
                                    Functions
                                </a>
                                <a
                                    href="#codingStandards"
                                    className="block py-2 px-4 hover:bg-gray-600 hover:text-white hover: rounded-lg"
                                >
                                    Coding Standards
                                </a>
                                <a
                                    href="#imports"
                                    className="block py-2 px-4 hover:bg-gray-600 hover:text-white hover: rounded-lg"
                                >
                                    Imports
                                </a>
                            </div>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
                            >
                                Vercel
                            </a>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
                            >
                                Node Framework
                            </a>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
                            >
                                Rendering
                            </a>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
                            >
                                RestAPI
                            </a>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
                            >
                                Terminal Commands
                            </a>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="py-5 px-3 hover:bg-gray-700 hover:text-white hover: rounded-lg"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default header;
