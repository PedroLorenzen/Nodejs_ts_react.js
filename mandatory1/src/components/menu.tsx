import React from 'react';
import { Link } from 'react-scroll';

function Menu() {
    return (
        <div className="grid grid-cols-2 gap-10 mt-10 mb-10 w-full">
            <div className="group p-10 shadow-xl bg-stone-200 rounded-lg text-center relative">
                <Link to="/cleancode" className="menuHeadlines">
                    <p className="cursor-pointer">Clean Code</p>
                </Link>
                <div className="hidden group-hover:grid grid-cols-2 gap-4 mt-8">
                    <div className="menuSubCategories">
                        <Link to="debugging" smooth={true} duration={500}>
                            Debugging
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="prettier" smooth={true} duration={500}>
                            Prettier
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="promises" smooth={true} duration={500}>
                            Promises
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="arrow-functions" smooth={true} duration={500}>
                            Arrow vs Standard Functions
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="coding-standards" smooth={true} duration={500}>
                            Coding Standards
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="imports" smooth={true} duration={500}>
                            Imports
                        </Link>
                    </div>
                </div>
            </div>
            <div className="group p-10 shadow-xl bg-stone-200 rounded-lg text-center relative">
                <Link to="/cleancode" className="menuHeadlines">
                    <p className="cursor-pointer">Vercel</p>
                </Link>
                <div className="hidden group-hover:grid grid-cols-2 gap-4 mt-8">
                    <div className="menuSubCategories">
                        <Link to="debugging" smooth={true} duration={500}>
                            Debugging
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="prettier" smooth={true} duration={500}>
                            Prettier
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="promises" smooth={true} duration={500}>
                            Promises
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="arrow-functions" smooth={true} duration={500}>
                            Arrow vs Standard Functions
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="coding-standards" smooth={true} duration={500}>
                            Coding Standards
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="imports" smooth={true} duration={500}>
                            Imports
                        </Link>
                    </div>
                </div>
            </div>
            <div className="group p-10 shadow-xl bg-stone-200 rounded-lg text-center relative">
            <Link to="/cleancode" className="menuHeadlines">
                    <p className="cursor-pointer">Node Framework</p>
                </Link>
                <div className="hidden group-hover:grid grid-cols-2 gap-4 mt-8">
                    <div className="menuSubCategories">
                        <Link to="debugging" smooth={true} duration={500}>
                            Debugging
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="prettier" smooth={true} duration={500}>
                            Prettier
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="promises" smooth={true} duration={500}>
                            Promises
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="arrow-functions" smooth={true} duration={500}>
                            Arrow vs Standard Functions
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="coding-standards" smooth={true} duration={500}>
                            Coding Standards
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="imports" smooth={true} duration={500}>
                            Imports
                        </Link>
                    </div>
                </div>
            </div>
            <div className="group p-10 shadow-xl bg-stone-200 rounded-lg text-center relative">
            <Link to="/cleancode" className="menuHeadlines">
                    <p className="cursor-pointer">Rendering</p>
                </Link>
                <div className="hidden group-hover:grid grid-cols-2 gap-4 mt-8">
                    <div className="p-3 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="debugging" smooth={true} duration={500}>
                            Debugging
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="prettier" smooth={true} duration={500}>
                            Prettier
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="promises" smooth={true} duration={500}>
                            Promises
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="arrow-functions" smooth={true} duration={500}>
                            Arrow vs Standard Functions
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="coding-standards" smooth={true} duration={500}>
                            Coding Standards
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="imports" smooth={true} duration={500}>
                            Imports
                        </Link>
                    </div>
                </div>
            </div>
            <div className="group p-10 shadow-xl bg-stone-200 rounded-lg text-center relative">
            <Link to="/cleancode" className="menuHeadlines">
                    <p className="cursor-pointer">Projects</p>
                </Link>
                <div className="hidden group-hover:grid grid-cols-2 gap-4 mt-8">
                    <div className="p-3 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="debugging" smooth={true} duration={500}>
                            Debugging
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="prettier" smooth={true} duration={500}>
                            Prettier
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="promises" smooth={true} duration={500}>
                            Promises
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="arrow-functions" smooth={true} duration={500}>
                            Arrow vs Standard Functions
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="coding-standards" smooth={true} duration={500}>
                            Coding Standards
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="imports" smooth={true} duration={500}>
                            Imports
                        </Link>
                    </div>
                </div>
            </div>
            <div className="group p-10 shadow-xl bg-stone-200 rounded-lg text-center relative">
            <Link to="/cleancode" className="menuHeadlines">
                    <p className="cursor-pointer">Terminal Commands</p>
                </Link>
                <div className="hidden group-hover:grid grid-cols-2 gap-4 mt-8">
                    <div className="p-3 border bg-stone-400 hover:bg-stone-700 hover:text-white rounded-lg hover:cursor-pointer">
                        <Link to="debugging" smooth={true} duration={500}>
                            Debugging
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="prettier" smooth={true} duration={500}>
                            Prettier
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="promises" smooth={true} duration={500}>
                            Promises
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="arrow-functions" smooth={true} duration={500}>
                            Arrow vs Standard Functions
                        </Link>
                    </div>
                    <div className="menuSubCategories">
                        <Link to="coding-standards" smooth={true} duration={500}>
                            Coding Standards
                        </Link>
                    </div>
                    <div className="menuSubCategories">
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
