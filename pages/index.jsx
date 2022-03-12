import { Fragment } from 'react'
import Head from 'next/head'
import { Project } from '@/components/Project'
import { projects } from '@/utils/mock-projects'
import { Navbar } from '@/components/Navbar'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900">
      <Head>
        <title>JeanTivan | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="mt-10 flex w-full flex-1 flex-col items-center justify-center sm:px-8 md:mt-12 lg:px-32">
        <div className="mb-10 w-full flex-1 pl-4 md:mb-12">
          <h1 className="mb-6 text-4xl font-black uppercase text-slate-300 md:text-6xl">
            Projects.
          </h1>
          <p className="text-lg text-slate-400">
            These are the projects that I have build so far.
          </p>
        </div>

        {projects.map((project) => (
          <Fragment key={project.projectName}>
            <Project {...project} />
          </Fragment>
        ))}
      </main>
    </div>
  )
}

export default Home
