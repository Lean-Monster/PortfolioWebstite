import { Mail,Linkedin, Github } from 'lucide-react'
import TagComponent from "../Components/TagComponent"

const tags = ["Javascript", "Typescript", "Python", "React", "NodeJS", "ExpressJS", "MongoDB", "SQL", "Docker", "Git","HTML", "CSS",
    "SpringBoot", "C++","Kubernetes"
]

export default function aboutSection(){
    return(
        <div className="flex w-full " id="about">
            <div className="flex flex-col justify-center w-2/3 mt-10 ml-40 mr-10">
                <h1 className="pb-5 text-4xl font-bold text-[#b8dbd9]">/About Me</h1>
                <p className="text-xl">Hi, thanks again for checking out my portfolio! My name is Luca Vozzolo, i'm a recent graduate from Liverpool Hope University with a
                    1st class degree in Software Engineering .
                </p>
                <p className="pt-5 text-xl">
                    I have a passion for software development, with experience in many languages and frameworks. However I am always looking to expand my skills and knowledge,
                    being open to anything new. Currently, I am building whatever personal projects I am interested in, ranging from improving and building upon my MERN stack web
                    application or creating an app to manage delivery van saftey checks for a friend. I am currently looking for a tech role, where I can continue to learn and grow as a developer.
                </p>
                <p className="pt-5 text-xl">
                    Outside of programming, I enjoy reading a variety of genres, from manga to non-fiction. I have recently learnt how to play chess and have been playing a lot to increase
                    my rating. I also like to swim to keep fit.
                </p>
                <div className="flex content-end justify-between w-1/5 h-full pt-10 pb-10">
                    <a href="https://github.com/Lean-Monster"><Github size={48} className="mb-7 hover:stroke-[#b8dbd9] hover:transition-all hover:-translate-y-1"/></a>            
                    <a href="https://www.linkedin.com/in/luca-vozzolo/"><Linkedin size={48} className="mb-7 hover:stroke-[#b8dbd9] hover:transition-all hover:-translate-y-1"/></a>
                    <a href="mailto:LucaVozzolo16@gmail.com"><Mail size={48} className="hover:stroke-[#b8dbd9] hover:transition-all hover:-translate-y-1"/></a>
                </div>
            </div> 
            <div className="flex flex-wrap items-start content-start self-start w-1/3 gap-2 mt-24 mr-40">
                {tags.map((tag) => (
                    <TagComponent tagName={tag}/>
                ))}
            </div> 
        </div>
    )
} 