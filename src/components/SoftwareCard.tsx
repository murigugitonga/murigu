import type {ReactElement} from "react"
import type { Project } from "../types/portfolio.js"

const projectRepos : Project[] = [
    {
        id: '1',
        repoName : 'test_repo',
        repoDesc: "AI Infrastructure repo boilerplate code",
        repoLink : 'https://github.com/murigugitonga/tensor_runtime'
    },
        {
        id: '1',
        repoName : 'test_repo',
        repoDesc: "AI Infrastructure repo boilerplate code",
        repoLink : 'https://github.com/murigugitonga/tensor_runtime'
    },
        {
        id: '2',
        repoName : 'luminar_tensor_runtime',
        repoDesc: "A multi-tiered runtime environment for ",
        repoLink : 'https://github.com/murigugitonga/tensor_runtime'
    },
        {
        id: '1',
        repoName : 'test_repo',
        repoDesc: "AI Infrastructure repo boilerplate code",
        repoLink : 'https://github.com/murigugitonga/tensor_runtime'
    },

]

export default function SoftwareCard():ReactElement{
    return (
        <div className="flex flex-col space-y-2 w-full bg-inherit text-inherit items-start">
            <h2 className="text-2xl font-semibold text-tech-bright">Software</h2>
            <div className="flex flex-col space-y-4">
                {projectRepos.map( project=>(
                    <div key={project.id} className="flex w-full">
                        <div className="w-full flex flex-col items-center">
                            <a href={project.repoLink} className="flex w-full justify-between items-center hover:underline">
                                <span>{project.repoName}</span>
                                <span>&#10230;</span>
                            </a>
                            <blockquote className="text-tech-steel italic text-sm">
                                {project.repoDesc}
                            </blockquote>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}