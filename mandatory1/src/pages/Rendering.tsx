import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';
import ssr from '../assets/images/Rendering/ssr.png';

function Rendering() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <p className="p-20 bg-stone-800"></p>
            </div>
            <div className="infoDiv">
                <div className="infoInnerDiv" id="ssr">
                    <h2 className="infoHeadline">Serverside Rendering</h2>
                    <p className="infoParagraph">
                        Server-side rendering (SSR) in Node.js is a technique that generates HTML on the server and sends it to the client's browser,
                        providing a fully rendered page on the initial load. This approach is particularly useful for improving the performance and
                        SEO of web applications.{' '}
                    </p>
                    <p className="infoParagraph">
                        Unlike traditional client-side rendering, where the browser downloads JavaScript files and then builds the page, SSR executes
                        the application's logic on the server, creating the page's HTML and sending it directly to the browser.
                    </p>
                    <p className="infoParagraph">
                        In our previous project we loaded pages from the filesystem and passed it through a templating engine (readPage and renderPage
                        functions). This process injected dynamic content, like custom titles and CSS links, into the pages. Our templating engine
                        read HTML files, incorporated global components like headers and footers, and allowed for dynamic placeholders (e.g., for page
                        titles or additional CSS) to be filled in. Then we had express routes configured to serve the dynamically prepared HTML
                        content directly, bypassing the need for static file serving for these pages.
                    </p>
                    <p className="infoParagraphBottom">
                        This approach provides a flexible, maintainable way to serve dynamically generated content for an SSR application in Node.js,
                        enhancing SEO and user experience by delivering fully rendered pages to the client.
                    </p>
                </div>
                <div className="infoPicDiv">
                    <img src={ssr} alt="." className="infoPic" />
                </div>
            </div>
            <div className="infoDiv">
                <div className="infoPicDiv">
                    <img src={ssr} alt="." className="infoPic" />
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
            <div>
                <Menu />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Rendering;
