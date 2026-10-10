import type { ReactElement } from "react";
import type { Project } from "../types/portfolio.js";

const projectRepos: Project[] = [
  {
    id: "1",
    repoName: "Native Compute Matrix Extension",
    repoDesc:
      "A multi-thread compilation engine to manage heavy computational array allocations.",
    repoLink: "https://github.com/murigugitonga/tensor_runtime",
  },
  {
    id: "1",
    repoName: "Asynchronous gRPC Polyglot Transport Mesh",
    repoDesc: "A high throughput telemetry gateway.",
    repoLink: "https://github.com/murigugitonga/tensor_runtime",
  },
  {
    id: "2",
    repoName: "Isolated Compute Sandbox",
    repoDesc:
      "A configuration framework for hardware-constrained production environments.",
    repoLink: "https://github.com/murigugitonga/tensor_runtime",
  },
  {
    id: "1",
    repoName: "Accelerated CPU Matrix Wrapper",
    repoDesc:
      "A python package that replaces slow loops with low-level compute.",
    repoLink: "https://github.com/murigugitonga/tensor_runtime",
  },
];

export default function SoftwareCard(): ReactElement {
  return (
    <div className="flex flex-col space-y-2 w-full bg-inherit text-inherit items-start">
      <h2 className="text-xl md:text-xl font-semibold text-milk-haze">
        Software
      </h2>
      <div className="flex flex-col space-y-4 px-3">
        {projectRepos.map((project) => (
          <div key={project.id} className="flex w-full">
            <div className="w-full flex flex-col items-start">
              <a
                href={project.repoLink}
                className="flex w-full justify-between items-center hover:underline hover:text-tech-ice"
              >
                <span className="text-sm">{project.repoName}</span>
                <span>&#10230;</span>
              </a>
              <blockquote className="text-tech-ice/50  text-sm text-start">
                {project.repoDesc}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
