import React from 'react';
import express from '../assets/images/Node/express.png';
import whatisnode from '../assets/images/Node/whatisnode.png';
import imports from '../assets/images/Node/imports.png';
import commands from '../assets/images/Node/commands.png';
import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';

function Node() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <p className="p-20 bg-stone-800"></p>
            </div>
            <div className="infoDiv">
                <div className="infoInnerDiv" id="node">
                    <h2 className="infoHeadline">What is Node</h2>
                    <p className="infoParagraph">
                        Node.js is an cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web
                        browser. Node.js enables high-performance execution of JavaScript, making it suitable for building a wide range of server-side
                        applications and tools.
                    </p>
                    <p className="infoParagraph">
                        Node.js comes with a rich ecosystem of modules and packages, managed through the Node Package Manager (npm). This simplifies
                        adding functionalities and managing dependencies in Node.js applications and allows developers to use a vast array of
                        open-source libraries.
                    </p>
                    <p className="infoParagraphBottom">
                        Node.js's use of JavaScript on both the client and server sides facilitates the development of isomorphic applications,
                        enabling code reuse and streamlining the development workflow. This also means that developers need only be proficient in
                        JavaScript to work across the entire stack.
                    </p>
                </div>
                <div className="infoPicDiv">
                    <img src={whatisnode} alt="." className="infoPic" />
                </div>
            </div>
            <div className="infoDiv">
                <div className="infoPicDiv">
                    <img src={express} alt="." className="infoPic" />
                </div>
                <div className="infoInnerDiv" id="express">
                    <h2 className="infoHeadline">Express</h2>
                    <p className="infoParagraph">
                        Express.js, often simply called Express, stands as a minimalist and flexible Node.js web application framework that provides a
                        robust set of features to develop web and mobile applications. Express simplifies the server creation process, without
                        obscuring Node.js features.
                    </p>
                    <p className="infoParagraph">
                        Express's minimalist approach does not lock developers into a specific way of doing things, offering the freedom to use any
                        database and templating engine, and to structure the application as they see fit. This flexibility, however, requires
                        developers to make more decisions about their application architecture and third-party libraries, potentially leading to
                        complexity in larger applications.
                    </p>
                    <p className="infoParagraphBottom">
                        The framework's wide adoption and the active community behind it mean a wealth of plugins, middleware, and tutorials are
                        readily available, making it easier to add features or solve common problems.
                    </p>
                </div>
            </div>
            <div className="infoDiv">
                <div className="infoInnerDiv" id="importsNode">
                    <h2 className="infoHeadline">Imports</h2>
                    <p className="infoParagraph">
                        In Node.js with Express, initializing an app starts with <br /> import express from 'express'; <br /> const app = express();{' '}
                        <br /> This is to set up the server. Using app.listen(port); launches the server, while app.get('/') and app.post('/') manage
                        web requests.
                    </p>
                    <p className="infoParagraphBottom">
                        A key feature, app.use(express.static('public'));, serves static files from a 'public' directory, restricting user access to
                        only these assets for security. This, alongside app.use(express.json()); for JSON body parsing, showcases the streamlined and
                        secure approach to web development with Express, making it a go-to for serving dynamic web applications with controlled access
                        to resources.
                    </p>
                </div>
                <div className="infoPicDiv">
                    <img src={imports} alt="." className="infoPic" />
                </div>
            </div>
            <div className="infoDiv">
                <div className="infoPicDiv">
                    <img src={commands} alt="." className="infoPic" />
                </div>
                <div className="infoInnerDiv" id="terminalNode">
                    <h2 className="infoHeadline">Terminal Commands</h2>
                    <p className="infoParagraph">
                        Node.js transforms JavaScript into a versatile server-side language, accessible through the terminal.
                    </p>
                    <p className="infoParagraph">
                        Through the terminal, developers interact with Node.js, executing scripts, managing packages with npm (Node Package Manager),
                        and starting or managing server processes. This command-line interface (CLI) access is fundamental to Node.js's operation,
                        offering a direct way to run JavaScript files, install third-party modules, and manage project dependencies.
                    </p>
                    <p className="infoParagraphBottom">
                        The terminal facilitates efficient development of Node.js's applications and development tooling like task runners and
                        linters.
                    </p>
                </div>
            </div>
            <div>
                <Menu />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Node;
