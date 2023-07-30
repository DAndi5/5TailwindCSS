import Image from 'next/image'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})
export default function Home() {
    return (
        <main className="lg:flex">
            <div className="w-full lg:w-2/3">
                {/*post cards  */}
                <section className="px-2">
                    <a className="block w-full lg:flex mb-10" href="#">
                         <Image
                            className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                            src="/images/img-3.jpg"
                            alt="img"
                            width={550}
                            height={310}
                            priority/>
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3
                                    className="dark:text-white mb-2 text-gray-700 font-bold text-2xl"
                                >
                                    Phasellus pharetra enim at nisl pharetra, nec fringilla
                                    arcu blandit.
                                </h3>
                                <p className="text-gray-700 dark:text-slate-400">
                                    Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining
                                    essentially unchanged.
                                </p>
                            </div>
                            <div className="flex mt-3">
                                 <Image
                                    className="h-10 w-10 rounded-full mr-2 object-cover"
                                    src="/8.jpg"
                                    alt="author"
                                    width={100}
                                    height={100}
                                    priority/>
                                <div>
                                    <p className="font-semibold text-gray-400 text-sm">
                                        Jane Doe
                                    </p>
                                    <time className="text-gray-400 text-xs">13 March</time>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a className="block w-full lg:flex mb-10" href="#">
                         <Image
                            className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                            src="/images/img-4.jpg"
                            alt="img"
                            width={190}
                            height={120}
                            priority/>
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3
                                    className="dark:text-white mb-2 text-gray-700 font-bold text-2xl"
                                >
                                    Cras ut elit id ligula placerat molestie at non erat.
                                </h3>
                                <p className="text-gray-700 dark:text-slate-400">
                                    It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking
                                    at its layout. The point of using Lorem Ipsum is that it
                                    has a more-or-less normal distribution of letters.
                                </p>
                            </div>
                            <div className="flex mt-3">
                                 <Image
                                    className="h-10 w-10 rounded-full mr-2 object-cover"
                                    // src="https://randomuser.me/api/portraits/men/7.jpg"
                                    src="/7.jpg"
                                    alt="author"
                                    width={100}
                                    height={100}
                                    priority/>
                                <div>
                                    <p className="font-semibold text-gray-400 text-sm">
                                        John Doe
                                    </p>
                                    <time className="text-gray-400 text-xs">14 March</time>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a className="block w-full lg:flex mb-10" href="#">
                         <Image
                            className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                            src="/images/img-5.jpg"
                            alt="img"
                            width={500}
                            height={320}
                            priority/>
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3
                                    className="dark:text-white mb-2 text-gray-700 font-bold text-2xl"
                                >
                                    Ut egestas diam ut massa elementum euismod.
                                </h3>
                                <p className="text-gray-700 dark:text-slate-400">
                                    Contrary to popular belief, Lorem Ipsum is not simply
                                    random text. It has roots in a piece of classical Latin
                                    literature from 45 BC, making it over 2000 years old.
                                </p>
                            </div>
                            <div className="flex mt-3">
                                 <Image
                                    className="h-10 w-10 rounded-full mr-2 object-cover"
                                    // src="https://randomuser.me/api/portraits/women/10.jpg"
                                    src="/10.jpg"
                                    alt="author"
                                    width={100}
                                    height={100}
                                    priority/>
                                <div>
                                    <p className="font-semibold text-gray-400 text-sm">
                                        Jane Doe
                                    </p>
                                    <time className="text-gray-400 text-xs">12 March</time>
                                </div>
                            </div>
                        </div>
                    </a>
                </section>

                {/*pagination  */}
                <div className="mt-20 mb-10">
                    <ul className="flex justify-center">
                        <li>
                            <a className="pagination-item rounded-l-lg" href="#">Previous</a>
                        </li>
                        <li><a className="pagination-item" href="#">1</a></li>
                        <li><a className="pagination-item" href="#">2</a></li>
                        <li>
                            <a
                                className="pagination-item text-blue-600 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                                href="#"
                            >3</a
                            >
                        </li>
                        <li><a className="pagination-item" href="#">4</a></li>
                        <li><a className="pagination-item" href="#">5</a></li>
                        <li>
                            <a className="pagination-item rounded-r-lg" href="#">Next</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className="w-full lg:w-1/3 px-2 md:flex md:space-x-6 lg:block lg:space-x-0"
            >
                {/*topics  */}
                <div className="w-full md:w-1/2 lg:w-full mb-5">
                    <h5
                        className="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2"
                    >
                        Popular News
                    </h5>
                    <ul>
                        <li
                            className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white hover:border-gray-200 transition-all duration-300"
                        >
                            <a
                                className="dark:text-slate-400 flex items-center text-gray-600"
                                href="#"
                            >
                    <span
                        className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-green-500 to-green-700"
                    ></span>
                                Vue
                                <span className="dark:text-slate-400 text-gray-500 ml-auto"
                                >23 articles</span
                                >
                            </a>
                        </li>
                        <li
                            className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white hover:border-gray-200 transition-all duration-300"
                        >
                            <a
                                className="dark:text-slate-400 flex items-center text-gray-600"
                                href="#"
                            >
                    <span
                        className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-orange-500 to-orange-700"
                    ></span>
                                Svelte
                                <span className="dark:text-slate-400 text-gray-500 ml-auto"
                                >20 articles</span
                                >
                            </a>
                        </li>
                        <li
                            className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white hover:border-gray-200 transition-all duration-300"
                        >
                            <a
                                className="dark:text-slate-400 flex items-center text-gray-600"
                                href="#"
                            >
                    <span
                        className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-red-500 to-red-700"
                    ></span>
                                Angular
                                <span className="dark:text-slate-400 text-gray-500 ml-auto"
                                >15 articles</span
                                >
                            </a>
                        </li>
                        <li
                            className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white hover:border-gray-200 transition-all duration-300"
                        >
                            <a
                                className="dark:text-slate-400 flex items-center text-gray-600"
                                href="#"
                            >
                    <span
                        className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-blue-500 to-blue-700"
                    ></span>
                                React
                                <span className="dark:text-slate-400 text-gray-500 ml-auto"
                                >7 articles</span
                                >
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="w-full md:w-1/2 lg:w-full">
                    {/*divider  */}
                    <div className="border border-dotted md:hidden lg:block"></div>

                    {/*subscribe  */}
                    <div className="my-5 md:my-0 lg:my-5">
                        <h5
                            className="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2"
                        >
                            Subscribe
                        </h5>
                        <p className="dark:text-slate-400 text-gray-600 mb-4">
                            Subscribe to our newsletter.
                        </p>
                        <input
                            placeholder="your email address"
                            type="email"
                            className="text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-600 transition-all duration-300"
                        />
                        <button
                            className="px-4 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800 transition-all duration-300"
                        >
                            Subscribe
                        </button>
                    </div>

                    {/*divider*/}
                    <div className="border border-dotted md:hidden lg:block"></div>
                </div>
            </div>
        </main>)
}
