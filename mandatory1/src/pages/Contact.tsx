import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';

function Contact() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="bg-stone-800 text-white pb-10 pt-20">
                <h2 className="text-4xl font-bold text-center my-4">Contact Me</h2>
                <p className="text-xl text-center my-4">Got a question? Reach out to us and we'll get back to you as soon as we can.</p>
                <p className="text-sm text-center">Button is not configured. The doesnt send anything it's just for show for now</p>
                <div className="max-w-screen-md mx-auto">
                    <form action="#" className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="email" className="text-lg font-medium">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="name@example.com"
                                required
                                className="w-full p-2 rounded-lg bg-stone-700 border border-stone-500 mt-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="text-lg font-medium">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                                required
                                className="w-full p-2 rounded-lg bg-stone-700 border border-stone-500 mt-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-lg font-medium">
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                placeholder="Your message"
                                required
                                className="w-full p-2 rounded-lg bg-stone-700 border border-stone-500 mt-2"
                            ></textarea>
                        </div>
                        <button type="submit" className="self-center px-4 py-2 bg-stone-500 hover:bg-stone-600 rounded-lg font-semibold">
                            Send Message
                        </button>
                    </form>
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

export default Contact;
