import Image from 'next/image'

const Bunners = () => {
    return (// bunners
        <section className="px-2 lg:flex lg:space-x-2">
            <a className="w-full lg:w-2/3 bg-gradient-to-tr bg-purple-300 h-96 mb-4 relative rounded inline-block overflow-hidden"
               href="#">
                <div
                    className="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"
                ></div>
                <Image className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                       src="/images/img-1.jpg"
                       alt="news"
                       width={4100}
                       height={2700}
                       priority/>
                <div className="p-4 absolute bottom-0 left-0 z-20">
                    <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                        Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <span
                        className="bg-gradient-to-bl from-blue-600 to-indigo-600 text-white inline-flex items-center justify-center px-4 py-1 mb-2"
                    >React</span
                    >
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
                            <p className="font-semibold text-gray-200 text-sm">John Doe</p>
                            <time className="text-gray-400 text-xs">14 March</time>
                        </div>
                    </div>
                </div>
            </a>

            <a className="w-full lg:w-1/3 bg-indigo-300 h-96 mb-4 relative rounded inline-block overflow-hidden"
               href="#">
                <div
                    className="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"></div>
                <Image className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                       src="/images/img-2.jpg"
                       alt="news"
                       width={4200}
                       height={2800}
                       priority/>
                <div className="p-4 absolute bottom-0 left-0 z-20">
                    <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <span
                        className="bg-gradient-to-bl from-blue-600 to-indigo-600 text-white inline-flex items-center justify-center px-4 py-1 mb-2"
                    >Angular</span
                    >
                    <div className="flex mt-3">
                        <Image
                            className="h-10 w-10 rounded-full mr-2 object-cover"
                            // src="https://randomuser.me/api/portraits/women/7.jpg"
                            src="/7 (1).jpg"
                            alt="author"
                            width={100}
                            height={100}
                            priority/>
                        <div>
                            <p className="font-semibold text-gray-200 text-sm">Jane Doe</p>
                            <time className="text-gray-400 text-xs">15 March</time>
                        </div>
                    </div>
                </div>
            </a>
        </section>)
}
export default Bunners