import { useRef, useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import rocketdab from "./assets/rocketdab.png";
import rocketlaunch from "./assets/rocketlaunch.png";
import rocketman from "./assets/rocketman.png";
import rocketride from "./assets/rocketride.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        <Header>
          <Section>
            <h1 className="text-3xl font-medium">
              <a href="#hero">🚀 Acme Rockets</a>
            </h1>

            <div>
              <button
                id="hamburger-button"
                className={`relative h-8 w-8 cursor-pointer text-3xl md:hidden ${
                  isMenuOpen ? "toggle-btn" : ""
                }`}
                onClick={toggleMenu}
              >
                <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
              </button>
              <nav
                className="hidden space-x-8 text-xl md:block"
                aria-label="main"
              >
                <a href="#rockets" className="hover:opacity-80">
                  Our Rockets
                </a>
                <a href="#testimonials" className="hover:opacity-80">
                  Testimonials
                </a>
                <a href="#contact" className="hover:opacity-80">
                  Contact
                </a>
              </nav>
            </div>
          </Section>
          <section
            id="mobile-menu"
            className={`absolute top-68 bg-black w-full text-5xl ${
              isMenuOpen ? "flex-col" : "hidden"
            } justify-center origin-top animate-open-menu`}
          >
            <nav
              className="flex flex-col min-h-screen items-center py-8"
              aria-label="mobile"
            >
              <a
                href="#hero"
                className="w-full text-center py-6 hover:opacity-80"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#rockets"
                className="w-full text-center py-6 hover:opacity-80"
                onClick={toggleMenu}
              >
                Our Rockets
              </a>
              <a
                href="#testimonials"
                className="w-full text-center py-6 hover:opacity-80"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="w-full text-center py-6 hover:opacity-80"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
              <a
                href="#footer"
                className="w-full text-center py-6 hover:opacity-80"
                onClick={toggleMenu}
              >
                Legal
              </a>
            </nav>
          </section>
        </Header>

        <main className="max-w-4xl mx-auto">
          <section
            id="hero"
            className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
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
                Acme Rockets is the leading provider of commercial space travel.
                Our rockets are designed to take you to the edge of space and
                back safely.
              </p>
              <p className="max-w-md text-2xl mt-4 text-center sm:text:left text-slate-700 dark:text-slate-400">
                Think Acme Rockets!
              </p>
            </article>
            <img src={rocketdab} alt="Rocket Dab" className="w-1/2" />
          </section>

          <hr className="mx-auto bg-black dark:bg-white w-1/2" />

          <section
            id="rockets"
            className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
          >
            <h2 className="text-4xl font-bold text-center sm:text-5xl md-6 text-slate-900 dark:text-white">
              Our Rockets
            </h2>
            <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
              <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                <img src={rocketman} alt="Explorer" className="w-1/2" />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                  Explorer
                </h3>
                <p className="hidden sm:block text-3xl mt-2 text-center text-slate-500 dark:text-slate-400">
                  $
                </p>
                <p className="sm:hidden mt-2 text-2xl text-center text-slate-500 dark:text-slate-400">
                  Affordable Exploration
                </p>
              </li>
              <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                <img src={rocketride} alt="Explorer" className="w-1/2" />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                  Adventurer
                </h3>
                <p className="hidden sm:block text-3xl mt-2 text-center text-slate-500 dark:text-slate-400">
                  $$
                </p>
                <p className="sm:hidden mt-2 text-2xl text-center text-slate-500 dark:text-slate-400">
                  Best Selling Rocket!
                </p>
              </li>
              <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                <img src={rocketlaunch} alt="Explorer" className="w-1/2" />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                  Infinity
                </h3>
                <p className="hidden sm:block text-3xl mt-2 text-center text-slate-500 dark:text-slate-400">
                  $$$
                </p>
                <p className="sm:hidden mt-2 text-2xl text-center text-slate-500 dark:text-slate-400">
                  Luxury Starship
                </p>
              </li>
            </ul>
          </section>

          <hr className="mx-auto bg-black dark:bg-white w-1/2" />

          <section
            id="testimonials"
            className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
          >
            <h2 className="text-4xl font-bold text-center sm:text-5xl md-6 text-slate-900 dark:text-white">
              Testimonials
            </h2>
            <figure className="my-12">
              <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                  Acme has always been there for me. Their Explorer rocket
                  arrived in a wooden crate as expected. Life-long customer! A++
                  shopping experience.
                </p>
              </blockquote>
              <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                &#8212;Wile E. Coyote, Genius
              </figcaption>
            </figure>
            <figure className="my-12">
              <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                  The Acme Adventurer Rocket has thwarted my Illudium Q-36
                  Explosive Space Modulator on several occassions.
                  <span className="italic">
                    This makes me very, very angry!
                  </span>
                  Nevertheless, K-9 and I have awarded Acme the Martian contract
                  for space exploration rockets based on Acme's quality and
                  sturdy designs.
                </p>
              </blockquote>
              <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                &#8212;Marvin The Martian &amp; K-9
              </figcaption>
            </figure>
            <figure className="my-12">
              <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                  I knew I not only wanted &#8212;
                  <span className="italic"> I needed</span> &#8212; Acme's
                  Infinity Rocket for my mission in space. Acme delivered in one
                  day! Nothing says{" "}
                  <q className="italic">Take me to your leader</q> like Acme's
                  Infinity Rocket! 💯
                </p>
              </blockquote>
              <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                &#8212;Buzz Lightyear
              </figcaption>
            </figure>
          </section>

          <hr className="mx-auto bg-black dark:bg-white w-1/2" />

          <section
            id="contact"
            className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
          >
            <h2 className="text-4xl font-bold text-center sm:text-5xl md-6 text-slate-900 dark:text-white">
              Contact Us
            </h2>
            <form
              action=""
              className="max-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
            >
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                minLength={3}
                maxLength={60}
                placeholder="Your Subject"
                className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
              />
              <label htmlFor="message">Mesage:</label>
              <textarea
                id="message"
                name="message"
                required
                rows={10}
                cols={30}
                placeholder="Your Message"
                className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
              />
              <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border boder-solid border-slate-900 dark:border-none">
                Submit
              </button>
            </form>
          </section>
        </main>

        <footer id="footer" className="bg-teal-700 text-white text-xl">
          <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
            <address>
              <h2>Acme Rocket-Powered Products, Inc.</h2>
              555 Astro Way
              <br />
              Fairfield, New Jersey 12345-5555
              <br />
              Email:
              <a href="mailto:inquiries@acmerockets.com">
                Inquires@AcmeRockets.com
              </a>
              <br />
              Phone: <a href="tel:+15555555555">(555) 555-5555</a>
            </address>
            <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
              <a href="#rockets" className="hover:opacity-80">
                Our Rockets
              </a>
              <a href="#testimonials" className="hover:opacity-80">
                Testimonials
              </a>
              <a href="#contact" className="hover:opacity-80">
                Contact
              </a>
            </nav>
            <div className="flex flex-col sm:gap-2">
              <p className="text-right">
                Copyright &copy; <span id="year">2024</span>
              </p>
              <p className="text-right">All Rights Reserved</p>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}

export default App;
