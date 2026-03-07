import { useEffect, useState } from "react"
import {siJavascript, siReact, siGithub, siDocker, siLetterboxd, siVite, siTypescript, siChessdotcom, siFigma, siPostman, siCss, siHtml5, siNodedotjs} from "simple-icons"

export default function BackgroundIconComponent(){

    const icons = [siJavascript, siReact, siGithub, siDocker, siLetterboxd, siVite, siTypescript, siChessdotcom, siFigma, siPostman, siCss, siHtml5, siNodedotjs];

    //creates a state for the icons with random start positions
    const [iconState, setIconState] = useState(
        icons.map(() => ({
        x:Math.random() * -300 -100,
        y:Math.random() * window.innerHeight - 150,
        speed: Math.random() * (0.5-0.2) + 0.2,
        rotation: Math.random() * 360
    })));

    function updateBackgroundIcons(){
        console.log(iconState)
        const interval = setInterval(() => {
            setIconState((prevState) =>
            prevState.map((state) => {
                let newX = state.x + state.speed;
                let newRotate = state.rotation + 0.1;

                if (newX > window.innerWidth + 100){ //if it reaches the end of the screen, reset it to the left with new speed and y 
                    return {
                       x: -300,
                       y: Math.random() * window.innerHeight -150,
                       speed: Math.random() * (0.5-0.2) + 0.2, 
                       rotation: Math.random() * 360
                    };
                }
                return { //update x position
                    ...state,
                    x: newX,
                    rotation: newRotate
                 };
            }))
        },16);

        return () => clearInterval(interval);
    }

    useEffect(() => {
        console.log("bogos binted")
        updateBackgroundIcons();
    }, []);
    
    return(
        <div className="absolute inset-0 overflow-hidden blur-[3px] -z-50">
                <div className="animate-scroll opacity-10">
                    {iconState.map((iconState, index) => (
                        <svg role="img" viewBox="0 0 24 24" width="144" height="144" 
                        style ={{position:"absolute", top:`${iconState.y}px`, transform: `translateX(${iconState.x}px) rotate(${iconState.rotation}deg)`,}}>
                            <path fill="currentColor" d={icons[index].path}/>
                        </svg>
                    ))}
                    
                </div>
        </div>
    )
}