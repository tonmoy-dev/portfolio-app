import type { NextPage } from "next";
import Project from "./Project/Project";


const Projects: NextPage = () => {
    return (
        <div className="container mx-auto py-10" id="projects">
            <p className="text-center text-2xl mb-6">Featured Projects</p>
            <div className="grid grid-cols-3 gap-6">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project/>
            </div>
        </div>
    )
}

export default Projects;