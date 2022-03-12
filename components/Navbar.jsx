export const Navbar = () => {
  return (
    <header className="supports-backdrop-blur:bg-white/95 sticky top-0 right-0 left-0 z-50 flex w-full items-center justify-center border-b-2 border-gray-800 bg-slate-900/75 px-6 py-4 backdrop-blur-sm">
      <nav className="flex font-bold uppercase text-slate-400">
        <a className="mx-3 rounded p-3 hover:cursor-pointer hover:bg-slate-800 hover:text-slate-200 hover:underline">
          About
        </a>
        <a className="mx-3 rounded p-3 hover:cursor-pointer hover:bg-slate-800 hover:text-slate-200 hover:underline">
          Projects
        </a>
        <a className="mx-3 rounded p-3 hover:cursor-pointer hover:bg-slate-800  hover:text-slate-200 hover:underline">
          Contact
        </a>
      </nav>
      <style jsx>
        {`
          .header {
            opacity: 0.99;
          }
        `}
      </style>
    </header>
  )
}
