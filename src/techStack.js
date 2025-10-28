import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.css"
import {
    faHtml5,           // HTML5
    faCss,         // CSS3  
    faJs,              // JavaScript
    faReact,           // React
    faNodeJs,          // Node.js
    faPython,          // Python
    faJava,            // Java
    faGithub,          // GitHub
    faGitAlt,          // Git
    faBootstrap,       // Bootstrap
    faCuttlefish,
} from '@fortawesome/free-brands-svg-icons';

export default function TechStack() {
    return (
        <>
            <div className="flex justify-center mt-20 gap-10">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-4">Tech Stacks</h2>
                    <div className="flex gap-10 items-center">
                        <div className="flex flex-col">
                            <FontAwesomeIcon icon={faHtml5} className="text-4xl text-[#f75403] mb-2" />
                            <span>HTML5</span>
                        </div>

                        <div className="flex flex-col">
                            <FontAwesomeIcon icon={faCss} className="text-4xl text-[#3e9dd7] mb-2" />
                            <span>CSS</span>
                        </div>

                        <div className="flex flex-col">
                            <FontAwesomeIcon icon={faJs} className="text-4xl text-[#f4e11e] mb-2" />
                            <span>JS</span>
                        </div>

                        <div className="flex flex-col">
                            <FontAwesomeIcon icon={faReact} className="text-4xl text-[#20d9ff] mb-2" />
                            <span>React</span>
                        </div>

                        <div className="flex flex-col">
                            <FontAwesomeIcon icon={faHtml5} className="text-4xl text-[#20d9ff] mb-2" />
                            <span>Tailwind</span>
                        </div>

                        <div className="flex flex-col">
                            <FontAwesomeIcon icon={faBootstrap} className="text-4xl text-[#8a1bfc] mb-2" />
                            <span>Bootstrap</span>
                        </div>

                        <div className="flex flex-col">
                            <FontAwesomeIcon icon={faCuttlefish} className="text-4xl text-[#0c4a86] mb-2" />
                            <span>C++</span>
                        </div>

                        <div className="flex flex-col">
                            <FontAwesomeIcon icon={faJava} className="text-4xl text-[#bed9ed] mb-2" />
                            <span>Java</span>
                        </div>

                        <div className="flex flex-col">
                            <FontAwesomeIcon icon={faGithub} className="text-4xl text-white mb-2" />
                            <span>Github</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}