import gamelog from "../assets/images/gamelog.png"
import appdev from "../assets/images/appdev.png"
import minigames from "../assets/images/minigames.png"
import gamesapp from "../assets/images/gamesapp.png"
import librarydevops from "../assets/images/librarydevops.png"
import ProjectContainer from "../Components/ProjectContainerComponent"

export default function projectSection(){

    return (
        <div className="flex w-full" id="projects">
            <div className="w-full pt-10 ml-40 mr-10">
                <h1 className="text-4xl font-bold text-[#b8dbd9] pb-4">/My Projects</h1>
                <h2 className="text-2xl">/WIP</h2>
                    <div className="w-full">
                        <ProjectContainer projectImage={gamelog} projectTitle="My Games Log" projectDescription="
                        My final year dissertation project which invloved creating a MERN stack web application and recommendation algorithm in order to see how user 
                        reviews and sentiment analysis helps recommendation. Includes user authentication, dynamic CRUD operations and responsive UI design. It is still being
                        improved upon currently as a personal project now."/>
                        <ProjectContainer projectImage={appdev} projectTitle="Van Driver App" projectDescription="A simple android app to submit reports on delivery van safety checks
                        before they are sent out. Created with android studio and Java, still in early development."/>
                    </div>
                <h2 className="text-2xl">/Completed</h2>
                    <div>
                        <ProjectContainer projectImage={minigames} projectTitle="Minigames Collection" projectDescription="A collection of small, fun minigames created using HTML, CSS, and JavaScript library p5.Js. 
                        Each game is self-contained and can be played independently."/>
                        <ProjectContainer projectImage={gamesapp} projectTitle="My Games Log: App Edition" projectDescription="A simplised android app version of the My Games Log web application. Allows users to log and review
                        their games, while accessing their stats. Data is persisted locally on the device by using a SQLite database. "/>
                        <ProjectContainer projectImage={librarydevops} projectTitle="Library Manager" projectDescription="A website to demo the use of Java and Springboot to create RESTful APIs and microservices, and 
                        demo the use of Docker for containerization with kubernetes for deployment"/>
                    </div>
            </div>
        </div>
    )
}
