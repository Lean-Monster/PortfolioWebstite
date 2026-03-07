import { Mail,Linkedin, Github } from 'lucide-react'

export default function FooterSection(){

    return(
        <div className='flex flex-col items-center justify-center w-full'>
            <div className="border-y-2 border-[#b8dbd9] border-opacity-60 w-11/12 mt-10 pt-5 flex justify-evenly">
                <div className="flex flex-col">
                    <p className="text-xl">Contact Me</p>
                    <div className="flex justify-start">
                        <a href="mailto:LucaVozzolo16@gmail.com"><Mail size={24} className="mr-2 opacity-75 hover:opacity-100 hover:transition-all"/></a>
                        <a href="https://github.com/Lean-Monster"><Github size={24} className="mr-2 opacity-75 hover:opacity-100 hover:transition-all"/></a>
                        <a href="https://www.linkedin.com/in/luca-vozzolo/"><Linkedin size={24} className="mr-2 opacity-75 hover:opacity-100 hover:transition-all"/></a>
                    </div>
                </div>
                <div className="flex flex-col pb-4">
                    <p className="text-xl">Links</p>
                    <div className="flex flex-col">
                        <a href="#home" className="opacity-75 hover:opacity-100 hover:transition-all">Home</a>
                        <a href="#about" className="opacity-75 hover:opacity-100 hover:transition-all">About Me</a>
                        <a href="#projects" className="opacity-75 hover:opacity-100 hover:transition-all">My Projects</a>
                    </div>
                </div>
            </div>
            <p className="p-3 opacity-75">© 2026 Gian Luca Vozzolo. All rights reserved.</p>
        </div>
    )
}   