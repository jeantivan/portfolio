import React from 'react'
import Image from 'next/image'

export const Project = ({
  projectName,
  projectDescription,
  projectImage = null,
  projectTags,
}) => {
  return (
    <article className="cuadro mb-12 flex w-full rounded-lg border-2 border-slate-900 bg-gray-900 p-4 shadow-xl duration-200 ease-in hover:cursor-pointer hover:border-slate-800 hover:bg-slate-800 hover:shadow-2xl ">
      <div className="flex w-full flex-col md:flex-row">
        <div className="aspect-video flex-1 rounded-lg bg-neutral-600 sm:mb-6 md:order-last md:w-1/4">
          {projectImage && <Image src={projectImage} />}
        </div>
        <div className="flex w-full flex-col md:w-3/4">
          <h2 className="mb-4 text-3xl font-bold text-slate-300 md:text-4xl">
            {projectName}
          </h2>
          <p className="mb-4 pr-6 text-neutral-400">{projectDescription}</p>
          <div id="tags" className="mt-auto">
            <ul className="flex list-none flex-wrap text-xs text-gray-500">
              {projectTags.map((tag) => (
                <li className="pr-4" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .cuadro:hover {
            transform: scale(1.02);
          }
        `}
      </style>
    </article>
  )
}
