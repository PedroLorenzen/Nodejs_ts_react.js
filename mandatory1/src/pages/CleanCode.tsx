import React from 'react';
import promises from '../assets/images/cleanCode/promises.png';
import esLint from '../assets/images/cleanCode/esLint.png';
import prettier from '../assets/images/cleanCode/prettier.png';
import arrow from '../assets/images/cleanCode/arrow.png';
import codingStandards from '../assets/images/cleanCode/codingStandards.png';
import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';

function CleanCode() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <p className="p-20 bg-stone-800"></p>
            </div>
            <div className="infoDiv">
                <div className="infoInnerDiv" id="debugging">
                    <h2 className="infoHeadline">Debugging (Console.log, browser, ESLint)</h2>
                    <p className="infoParagraph">
                        Utilizing console.log helps developers to quickly insert checkpoints in their code, providing visibility into variable states,
                        function returns, or to simply confirm code execution paths. It's a fundamental method for dynamic logging. It can though lead
                        to log pollution if not handled correctly and affect performance.{' '}
                    </p>
                    <p className="infoParagraph">
                        ESLint performs static analysis on your codebase, identifying syntactical and logical errors before runtime. Together with its
                        pattern recognition and automated refactoring, ESLint has highly customizable rule sets, which can be tailored to match
                        specific project guidelines or coding conventions. It allows for automated code quality checks during development or before
                        code merges.{' '}
                    </p>
                    <p className="infoParagraphBottom">
                        Modern browsers offer integrated debugging environments that support a plethora of diagnostic tools. These tools gives the
                        user the ability to set breakpoints, step through code and examine call stacks. It facilitates a deeper understanding of
                        execution flows and performance bottlenecks. There are many more tools that takes time to learn but are very valuable when
                        debugging.{' '}
                    </p>{' '}
                </div>
                <div className="infoPicDiv">
                    <img src={esLint} alt="." className="infoPic" />
                </div>
            </div>
            <div className="infoDiv">
                <div className="infoPicDiv">
                    <img src={promises} alt="." className="infoPic" />
                </div>
                <div className="infoInnerDiv" id="promises">
                    <h2 className="infoHeadline">Promises (async, await, then, catch)</h2>
                    <p className="infoParagraph">
                        Promises in JavaScript have made dealing with asynchronous tasks a lot easier. Using async and await allows for a more
                        intuitive, synchronous-style flow of execution. This syntactic sugar lets developers pause where the code is waiting for a
                        Promise without compomising the responsiveness of the application. Even though Javascript is single-threaded it manages tasks
                        efficiently thanks to its event loop deciding the execution sequence.
                    </p>
                    <p className="infoParagraphBottom">
                        Putting async before a function means you're going to use await in the function, which waits for a Promise to settle (either
                        complete or fail) before continuing execution. This makes your code much cleaner and saves you from falling into the dreaded
                        Callback Hell or Pyramid of Doom where you'd have a lot of callbacks nested inside callbacks, making everything hard to read
                        and debug.
                    </p>
                </div>
            </div>
            <div className="infoDiv">
                <div className="infoInnerDiv" id="prettier">
                    <h2 className="infoHeadline">Prettier</h2>
                    <p className="infoParagraph">
                        Prettier is a code formatting tool that automates the task of enforcing consistent coding styles across various languages like
                        JavaScript, TypeScript, CSS, HTML, and JSON. It integrates with most code editors, streamlining workflows by formatting code
                        on-the-fly or through pre-commit hooks. This uniformity simplifies code reviews and collaboration, making it easier for teams
                        to maintain a clean, readable codebase.
                    </p>
                    <p className="infoParagraphBottom">
                        However, Prettier's opinionated approach and limited configuration options can be a drawback for those with specific
                        formatting preferences. Additionally, integrating Prettier into large projects may lead to extensive changes in a single
                        commit, potentially complicating the git history. Despite these challenges, its benefits in reducing manual formatting efforts
                        and promoting consistency are widely appreciated.
                    </p>
                </div>
                <div className="infoPicDiv">
                    <img src={prettier} alt="." className="infoPic" />
                </div>
            </div>
            <div className="infoDiv">
                <div className="infoPicDiv">
                    <img src={arrow} alt="." className="infoPic" />
                </div>
                <div className="infoInnerDiv" id="arrow">
                    <h2 className="infoHeadline">Arrow vs. normal functions</h2>
                    <p className="infoParagraph">
                        Arrow functions provide a concise syntax and lexically bind this, making code cleaner, especially in callbacks and functions
                        where this refers to the surrounding context, not the function itself. This eliminates common errors related to this in
                        traditional functions, enhancing readability and reducing boilerplate in scenarios like array operations.
                    </p>
                    <p className="infoParagraphBottom">
                        Traditional functions are valuable for object methods and complex functions due to their ability to access the dynamic this
                        context and their suitability for constructors. Their flexibility in handling this, the arguments object, and function
                        hoisting makes them better suited where context and functionality is important.
                    </p>
                </div>
            </div>
            <div className="infoDiv">
                <div className="infoInnerDiv" id="codingStandards">
                    <h2 className="infoHeadline">Coding Standards</h2>
                    <p className="infoParagraph">
                        Coding standards are crucial for maintaining clean code, serving as a blueprint for developers to follow, ensuring
                        consistency, readability, and maintainability across a project. They minimize cognitive load by providing clear guidelines on
                        naming conventions, file organization, formatting, and best practices, allowing developers to focus on solving problems rather
                        than deciphering code.
                    </p>
                    <p className="infoParagraph">
                        Adhering to these standards facilitates smoother collaboration within teams, as code written by one developer is easily
                        understood by others, streamlining the review process and reducing the likelihood of errors.{' '}
                    </p>
                </div>
                <div className="infoPicDiv">
                    <img src={codingStandards} alt="." className="infoPic" />
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

export default CleanCode;
