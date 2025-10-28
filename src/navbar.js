import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <>
            <ul className="flex justify-center gap-20 mt-5 text-lg">
                <li className="hover:text-green-600 flex items-center gap-2 cursor-pointer transition duration-300">
                    <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
                    <span>Home</span>
                </li>
                <li className="hover:text-green-600 flex items-center gap-2 cursor-pointer transition duration-300">
                    <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                    <span>About</span>
                </li>
                <li className="hover:text-green-600 flex items-center gap-2 cursor-pointer transition duration-300">
                    <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5" />
                    <span>Portfolio</span>
                </li>
                <li className="hover:text-green-600 flex items-center gap-2 cursor-pointer transition duration-300">
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                    <span>Contact Me</span>
                </li>
            </ul>
        </>
    )
}