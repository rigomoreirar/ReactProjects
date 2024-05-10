import Header from "./components/Header";
import Section from "./components/Section";
import rocketdab from "./assets/rocketdab.png";
import rocketlaunch from "./assets/rocketlaunch.png";
import rocketman from "./assets/rocketman.png";
import rocketride from "./assets/rocketride.png";

function App() {
    return (
        <>
            <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
                <Header>
                    <Section>
                        <h1 className="text-3xl font-medium">
                            <a href="#heroSection">🚀 Acme Rockets</a>
                        </h1>

                        <div>
                            <button
                                id="mobile-open-button"
                                className="text-3xl sm:hidden focus:outline-none"
                            >
                                &#9776;
                            </button>
                            <nav
                                className="hidden sm:block space-x-8 text-xl"
                                aria-label="main"
                            >
                                <a href="#rockets" className="hover:opacity-80">
                                    Our Rockets
                                </a>
                                <a
                                    href="#testimonials"
                                    className="hover:opacity-80"
                                >
                                    Testimonials
                                </a>
                                <a href="#contact" className="hover:opacity-80">
                                    Contact
                                </a>
                            </nav>
                        </div>
                    </Section>
                </Header>
                <main className="max-w-4xl mx-auto">
                    <section
                        id="hero"
                        className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12"
                    >
                        <article className="sm:w-1/2">
                            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-slate-900 dark:text-white">
                                We Boldy Go Where{" "}
                                <span className="text-indigo-700 dark:text-indigo-300">
                                    No Rocket
                                </span>{" "}
                                Has Gone Before...
                            </h2>
                            <p className="max-w-md text-2xl mt-4 text-center sm:text:left text-slate-700 dark:text-slate-400">
                                Acme Rockets is the leading provider of
                                commercial space travel. Our rockets are
                                designed to take you to the edge of space and
                                back safely.
                            </p>
                            <p className="max-w-md text-2xl mt-4 text-center sm:text:left text-slate-700 dark:text-slate-400">
                                Think Acme Rockets!
                            </p>
                        </article>
                        <img
                            src={rocketdab}
                            alt="Rocket Dab"
                            className="w-1/2"
                        />
                    </section>
                </main>
                <div id="heroSection"></div>
                <div id="rockets"></div>
                <div id="testimonials"></div>
                <div id="contact"></div>
            </div>
        </>
    );
}

export default App;
