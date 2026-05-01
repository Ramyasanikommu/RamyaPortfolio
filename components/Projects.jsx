export default function Projects() {
    const work = [
        {
            name: 'eLabAssist',
            icon: '/assets/work-1.png',
            description: 'Lab appointment & report platform',
            link: 'https://www.elabassist.com/LoginGlobal.aspx',
        },
        {
            name: 'Digital Parliament',
            icon: '/assets/work-2.png',
            description: 'Civic engagement mobile + web app',
            link: '#',
        },
        {
            name: 'KeshAyurved',
            icon: '/assets/work-3.png',
            description: 'Booking & e-commerce — hair treatments',
            link: 'https://www.keshayurved.com/',
        },
        {
            name: 'CorpeLabAssist',
            icon: '/assets/work-4.png',
            description: 'Corporate pathology portal',
            link: 'https://corpmain.elabassist.com/ElabCorpLogin.aspx',
        },
    ];
    return (
        <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Hands-on Development</h4>
            <h2 className="text-center text-5xl font-Ovo">My Projects</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">A selection of real-world projects I&apos;ve built — spanning healthcare portals, civic engagement platforms, and e-commerce booking systems.</p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {work.map((item) => (
                    <div key={item.name} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{ backgroundImage: `url(${item.icon})` }}>
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{item.name}</h2>
                                <p className="text-sm text-gray-700">{item.description}</p>
                            </div>
                            {item.link !== '#' ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                                >
                                    <img src="/assets/send-icon.png" alt="visit" className="w-5" />
                                </a>
                            ) : (
                                <span className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition opacity-40 cursor-default">
                                    <img src="/assets/send-icon.png" alt="" className="w-5" />
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}