import profilepic from "../assets/images/portfoliopic.jpg"
import { ArrowDown } from "lucide-react"
import TypewriteComponent from "../Components/TypewriterComponent";
import BackgroundIconComponent from "../Components/BackgroundIconComponent";



export default function introSection(){

    const scroll = () => {
        // window.scrollBy({
        //     top: 50,
        //     left: 0,
        //     behavior: 'smooth'
        // });
        document.getElementById("about")?.scrollIntoView({behavior: 'smooth'});
    }

    
    
    return(
        <div className="flex flex-col items-center justify-between w-full min-h-screen" id="home">
            <BackgroundIconComponent/>
            <div className="pt-12 md:pt-24 photo">
                <img src={profilepic} alt="profile picture" className="z-50 border border-black rounded-full h-72 w-72 md:h-96 md:w-96"/>
            </div>
            <TypewriteComponent/>
            <div className="flex bg-black rounded-full mb-14 animate-bounce md:mb-0" onClick={() => scroll()}>
                <button className="rounded-full">
                    <ArrowDown className="" size={48}/>
                </button>
            </div>
        </div>
        
    )
}