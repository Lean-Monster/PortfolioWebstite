import IntroSection from "./Sections/IntroSection.tsx"
import AboutSection from "./Sections/AboutSection.tsx"
import ProjectSection from "./Sections/ProjectSection.tsx"
import FooterSection from "./Sections/FooterSection.tsx"
import { Analytics } from "@vercel/analytics/react"


function App() {

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
      </head>
      <main className="flex flex-col items-center justify-between w-full min-h-screen">
        <IntroSection/>
        <AboutSection/>
        <ProjectSection/>
        <FooterSection/>
      </main>  
      <Analytics />
    </>
  )
}

export default App
