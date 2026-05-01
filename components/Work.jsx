export default function Work() {
    const services = [
        {
            name: 'Web Application Development',
            icon: '/assets/webicon.png',
            description: 'I build responsive, modern web applications using ASP.NET C#, RESTful APIs, Python and JavaScript. My focus is on clean UI, fast performance, and scalable architecture...',
            link: '#',
        },
        {
            name: 'Mobile App Developement',
            icon: '/assets/mobiledev.png',
            description: 'I create seamless mobile experiences using React Native and React Js, optimized for both iOS and Android, ensuring high performance and intuitive UX...',
            link: '#',
        },
        {
            name: 'Database & Backend Development',
            icon: '/assets/databasedbackend.png',
            description: 'Experienced in server-side logic and database design using SQL Server, MySQL, PostgreSQL, CosmosDB and MongoDB. I build strong APIs and efficient data structures for reliable applications...',
            link: '#',
        },
        {
            name: 'Cloud & DevOps',
            icon: '/assets/cloud.png',
            description: 'Skilled in deploying and maintaining applications using Azure, AWS, Docker, and Git / GitHub workflows. I deliver scalable, secure, and automated solutions...',
            link: '#',
        }
    ];
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Areas of Experience</h4>
            <h2 className="text-center text-5xl font-Ovo">My Technical Journey</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a Web/Mobile developer from London, UK with 6+ years of experience in multiple companies like S&P Global, Infosys and Blue Pearl Infotech.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white" style={{ padding: '15px' }}>
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="/assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}