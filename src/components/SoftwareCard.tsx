import type {ReactElement} from "react"
import type { Project } from "../types/portfolio.js"

const projectRepos : Project[] = [
    {
        id: '1',
        repoName : 'runtime_config-first',
        repoDesc: "AI Infrastructure repo boilerplate code",
        repoLink : 'https://github.com/murigugitonga/tensor_runtime'
    },
        {
        id: '1',
        repoName : 'inference_engine_cloud',
        repoDesc:"A traditional inference engine running on a moden cloud environment",
        repoLink : 'https://github.com/murigugitonga/tensor_runtime'
    },
        {
        id: '2',
        repoName : 'luminar_tensor_runtime',
        repoDesc: "A multi-tiered runtime environment for a mock AI infrastructure.",
        repoLink : 'https://github.com/murigugitonga/tensor_runtime'
    },
        {
        id: '1',
        repoName : 'native_config',
        repoDesc: "Native config files for a multi-pronged AI orchestration pipeline.",
        repoLink : 'https://github.com/murigugitonga/tensor_runtime'
    },

]

export default function SoftwareCard():ReactElement{
    return (
        <div className="flex flex-col space-y-2 w-full bg-inherit text-inherit items-start">
            <h2 className="text-xl md:text-xl font-semibold text-milk-haze">Software</h2>
            <div className="flex flex-col space-y-4 px-3">
                {projectRepos.map( project=>(
                    <div key={project.id} className="flex w-full">
                        <div className="w-full flex flex-col items-start">
                            <a href={project.repoLink} className="flex w-full justify-between items-center hover:underline hover:text-tech-ice">
                                <span className="text-sm">{project.repoName}</span>
                                <span>&#10230;</span>
                            </a>
                            <blockquote className="text-tech-ice/60 italic text-sm text-start">
                                {project.repoDesc}
                            </blockquote>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}