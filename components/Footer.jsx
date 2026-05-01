export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="/" className="mr-14 text-3xl font-bold text-gray-900 dark:text-white hover:opacity-90 transition">
                Ramya<span className="text-pink-500 font-extrabold">.</span>
                </a>

                <div className="w-max flex items-center gap-2 mx-auto mt-4 text-center">
                    <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                    <a href="mailto:jayaramyasanikommu@yahoo.com">jayaramyasanikommu@yahoo.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} Jaya Ramya Sanikommu. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/jaya-ramya-sanikommu-6742a6147">LinkedIn</a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ramyasanikommu">GitHub</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}