import React from 'react';
import { Link } from 'react-scroll';

function Menu() {
    return (
        <div className="grid grid-cols-2 gap-10 mt-10 mb-10 w-full">
            <div className="p-10 shadow-xl bg-stone-200 rounded-lg text-center">
                <p className="text-xl font-medium">Clean Code</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-3 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="debugging" smooth={true} duration={500}>
                            Debugging
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="prettier" smooth={true} duration={500}>
                            Prettier
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="promises" smooth={true} duration={500}>
                            Promises
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="arrow-functions" smooth={true} duration={500}>
                            Arrow vs Standard Functions
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="coding-standards" smooth={true} duration={500}>
                            Coding Standards
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="imports" smooth={true} duration={500}>
                            Imports
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-10 shadow-xl bg-stone-200 rounded-lg text-center">
                <p className="text-xl font-medium">Vercel</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="debugging" smooth={true} duration={500}>
                            Debugging
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="prettier" smooth={true} duration={500}>
                            Prettier
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="promises" smooth={true} duration={500}>
                            Promises
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="arrow-functions" smooth={true} duration={500}>
                            Arrow vs Standard Functions
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="coding-standards" smooth={true} duration={500}>
                            Coding Standards
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="imports" smooth={true} duration={500}>
                            Imports
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-10 shadow-xl bg-stone-200 rounded-lg text-center">
                <p className="text-xl font-medium">Node Framework</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="debugging" smooth={true} duration={500}>
                            Debugging
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="prettier" smooth={true} duration={500}>
                            Prettier
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="promises" smooth={true} duration={500}>
                            Promises
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="arrow-functions" smooth={true} duration={500}>
                            Arrow vs Standard Functions
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="coding-standards" smooth={true} duration={500}>
                            Coding Standards
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="imports" smooth={true} duration={500}>
                            Imports
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-10 shadow-xl bg-stone-200 rounded-lg text-center">
                <p className="text-xl font-medium">Rendering</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="debugging" smooth={true} duration={500}>
                            Debugging
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="prettier" smooth={true} duration={500}>
                            Prettier
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="promises" smooth={true} duration={500}>
                            Promises
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="arrow-functions" smooth={true} duration={500}>
                            Arrow vs Standard Functions
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="coding-standards" smooth={true} duration={500}>
                            Coding Standards
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="imports" smooth={true} duration={500}>
                            Imports
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-10 shadow-xl bg-stone-200 rounded-lg text-center">
                <p className="text-xl font-medium">Rest API</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="debugging" smooth={true} duration={500}>
                            Debugging
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="prettier" smooth={true} duration={500}>
                            Prettier
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="promises" smooth={true} duration={500}>
                            Promises
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="arrow-functions" smooth={true} duration={500}>
                            Arrow vs Standard Functions
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="coding-standards" smooth={true} duration={500}>
                            Coding Standards
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="imports" smooth={true} duration={500}>
                            Imports
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-10 shadow-xl bg-stone-200 rounded-lg text-center">
                <p className="text-xl font-medium">Terminal Commands</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="debugging" smooth={true} duration={500}>
                            Debugging
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="prettier" smooth={true} duration={500}>
                            Prettier
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="promises" smooth={true} duration={500}>
                            Promises
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="arrow-functions" smooth={true} duration={500}>
                            Arrow vs Standard Functions
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="coding-standards" smooth={true} duration={500}>
                            Coding Standards
                        </Link>
                    </div>
                    <div className="p-4 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="imports" smooth={true} duration={500}>
                            Imports
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
