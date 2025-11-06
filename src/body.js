const profileImage = new URL("./image/dsc_0499.jpg", import.meta.url).href;
import TechStack from "./techStack";

export default function Body() {
    return (
        <div>
            <div className="w-40 h-40 rounded-full border border-purple-500 
                shadow-[0_0_20px_#a855f7] 
                hover:shadow-[0_0_40px_#a855f7] 
                transition-all duration-200 p-1 ml-20">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-fit"
                />
            </div>

        </div>
    )
}