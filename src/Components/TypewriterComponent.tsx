import Typewriter from "typewriter-effect"

export default function TypewriteSection(){
    return(
        <div className="flex flex-col items-center -mt-24 md:-mt-48 text-[#b8dbd9] px-6 w-full text-center">
            <div className="pb-6 text-6xl md:text-8xl">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .pauseFor(2000)
                        .typeString("Hi, I'm Luca!")
                        .callFunction(() => {
                            document.querySelector(".Typewriter__cursor")?.classList.add("hidden");
                        })
                        .start();
                }}/>
            </div>
            <div className = "text-2xl second-typewriter text-[#b8dbd9] text-center">
                <Typewriter 
                    options={{
                        cursor: " "
                    }}
                    onInit={(typewriter) => {
                        typewriter
                        .pauseFor(4000)
                        .callFunction(() => {
                            const cursor = document.querySelector(".second-typewriter .Typewriter__cursor");
                            if (cursor) {
                                cursor.textContent = "|";
                            }
                        })
                        .typeString("Thanks for checking out my website.")
                        .start();
                    }}/>
            </div>
        </div>
    )
}