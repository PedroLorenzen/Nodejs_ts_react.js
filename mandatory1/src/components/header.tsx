import logo from '../assets/images/logo.png';

function header() {
    return (
        <nav className="fixed top-0 z-20 bg-stone-900 text-white w-full px-4 flex justify-between">
            <div className="flex space-x-4">
                <div>
                    <a href="/" className="flex items-center py-3 text-stone-800 hover:text-gray-900" title="headerLogo">
                        <img src={logo} alt="headerLogo" className="object-cover h-12 w-full rounded-lg" />
                        <span className="font-bold"></span>
                    </a>
                </div>
            </div>

            <div className="md:flex items-center space-x-1">
                <div>
                    <a href="/" className="py-5 px-3 hover:bg-stone-800 hover:text-white hover:rounded-lg">
                        Home
                    </a>
                </div>
                <div>
                    <a href="/about" className="py-5 px-3 hover:bg-stone-800 hover:text-white hover:rounded-lg">
                        About
                    </a>
                </div>
                <div className="relative group">
                    <a href="/cleanCode">
                        <button type="button" className="headerRelativeHeadlines">
                            Clean Code
                        </button>
                    </a>
                    <div className="headerDropdownDiv">
                        <a href="/cleancode/#debugging" className="headerDropdownElement">
                            Debugging
                        </a>
                        <a href="/cleancode/#promises" className="headerDropdownElement">
                            Promises
                        </a>
                        <a href="/cleancode/#prettier" className="headerDropdownElement">
                            Prettier
                        </a>
                        <a href="/cleancode/#arrow" className="headerDropdownElement">
                            Functions
                        </a>
                        <a href="/cleancode/#codingStandards" className="headerDropdownElement">
                            Coding Standards
                        </a>
                        <a href="/cleancode/#imports" className="headerDropdownElement">
                            Imports
                        </a>
                    </div>
                </div>
                <div className="relative group">
                    <a href="/cleanCode">
                        <button type="button" className="headerRelativeHeadlines">
                            Clean Code
                        </button>
                    </a>
                    <div className="headerDropdownDiv">
                        <a href="/cleancode/#debugging" className="headerDropdownElement">
                            Debugging
                        </a>
                        <a href="/cleancode/#promises" className="headerDropdownElement">
                            Promises
                        </a>
                        <a href="/cleancode/#prettier" className="headerDropdownElement">
                            Prettier
                        </a>
                        <a href="/cleancode/#functions" className="headerDropdownElement">
                            Functions
                        </a>
                        <a href="/cleancode/#codingStandards" className="headerDropdownElement">
                            Coding Standards
                        </a>
                        <a href="/cleancode/#imports" className="headerDropdownElement">
                            Imports
                        </a>
                    </div>
                </div>
                <div className="relative group">
                    <a href="/cleanCode">
                        <button type="button" className="headerRelativeHeadlines">
                            Clean Code
                        </button>
                    </a>
                    <div className="headerDropdownDiv">
                        <a href="/cleancode/#debugging" className="headerDropdownElement">
                            Debugging
                        </a>
                        <a href="/cleancode/#promises" className="headerDropdownElement">
                            Promises
                        </a>
                        <a href="/cleancode/#prettier" className="headerDropdownElement">
                            Prettier
                        </a>
                        <a href="/cleancode/#functions" className="headerDropdownElement">
                            Functions
                        </a>
                        <a href="/cleancode/#codingStandards" className="headerDropdownElement">
                            Coding Standards
                        </a>
                        <a href="/cleancode/#imports" className="headerDropdownElement">
                            Imports
                        </a>
                    </div>
                </div>
                <div className="relative group">
                    <a href="/cleanCode">
                        <button type="button" className="headerRelativeHeadlines">
                            Clean Code
                        </button>
                    </a>
                    <div className="headerDropdownDiv">
                        <a href="/cleancode/#debugging" className="headerDropdownElement">
                            Debugging
                        </a>
                        <a href="/cleancode/#promises" className="headerDropdownElement">
                            Promises
                        </a>
                        <a href="/cleancode/#prettier" className="headerDropdownElement">
                            Prettier
                        </a>
                        <a href="/cleancode/#functions" className="headerDropdownElement">
                            Functions
                        </a>
                        <a href="/cleancode/#codingStandards" className="headerDropdownElement">
                            Coding Standards
                        </a>
                        <a href="/cleancode/#imports" className="headerDropdownElement">
                            Imports
                        </a>
                    </div>
                </div>
                <div className="relative group">
                    <a href="/cleanCode">
                        <button type="button" className="headerRelativeHeadlines">
                            Clean Code
                        </button>
                    </a>
                    <div className="headerDropdownDiv">
                        <a href="/cleancode/#debugging" className="headerDropdownElement">
                            Debugging
                        </a>
                        <a href="/cleancode/#promises" className="headerDropdownElement">
                            Promises
                        </a>
                        <a href="/cleancode/#prettier" className="headerDropdownElement">
                            Prettier
                        </a>
                        <a href="/cleancode/#functions" className="headerDropdownElement">
                            Functions
                        </a>
                        <a href="/cleancode/#codingStandards" className="headerDropdownElement">
                            Coding Standards
                        </a>
                        <a href="/cleancode/#imports" className="headerDropdownElement">
                            Imports
                        </a>
                    </div>
                </div>
                <div className="relative group">
                    <a href="/cleanCode">
                        <button type="button" className="headerRelativeHeadlines">
                            Clean Code
                        </button>
                    </a>
                    <div className="headerDropdownDiv">
                        <a href="/cleancode/#debugging" className="headerDropdownElement">
                            Debugging
                        </a>
                        <a href="/cleancode/#promises" className="headerDropdownElement">
                            Promises
                        </a>
                        <a href="/cleancode/#prettier" className="headerDropdownElement">
                            Prettier
                        </a>
                        <a href="/cleancode/#functions" className="headerDropdownElement">
                            Functions
                        </a>
                        <a href="/cleancode/#codingStandards" className="headerDropdownElement">
                            Coding Standards
                        </a>
                        <a href="/cleancode/#imports" className="headerDropdownElement">
                            Imports
                        </a>
                    </div>
                </div>
                <div>
                    <a href="/contact" className="py-5 px-3 hover:bg-stone-800 hover:text-white hover:rounded-lg">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default header;
