export default function ProjectContainerComponent(props: {projectImage: string, projectTitle: string, projectDescription: String}){
    return(
        <div className="flex pr-20 py-5 hover:transition-colors duration-300 hover:bg-[#b8dbd9]/10 rounded-lg w-11/12">
           <div className="shrink-0">
                <img src={props.projectImage} alt={props.projectTitle} className="w-[450px] hover:scale-110 hover:transition-transform duration-300 pl-5"/>
            </div>
            <div className="flex flex-col pl-8">
                <p className="pb-4 text-4xl">{props.projectTitle}</p>
                <p className="text-xl">{props.projectDescription}</p>
            </div> 
        </div>
        
    )
}

{/* <div className="">
                        <img src={gamelog} className="absolute h-[250px] my-10 hover:scale-110 hover:transition-transform duration-300"/>
                    </div>
                    <div className="flex flex-col my-10 ml-5">
                        <p className="text-2xl">My Games Log:</p>
                        <p> This project was created for my final dissertation coursework. It is a MERN stack web application, with its own recommendation algorithm for suggesting new games the
                            user can try by looking at other games of the user </p>
                    </div> */}