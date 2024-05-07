import { Link } from "@remix-run/react"
import ChevronDownIcon from "~/components/chevron-down-icon"
import SnackIcon from "~/components/snack-icon"


export default function Index() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="#">
          <SnackIcon className="h-16 w-16" />
          <span className="sr-only">Full Stack Snacks</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#about">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="hero">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Full Stack Snacks
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I'm JB Tellez, a full stack engineer and educator.
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  This is where I try out new technologies.
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 py-8">
                  A very cool company is using AI powered tools to empower students and educators. That's right up my
                  alley!
                </p>
              </div>
              <div className="animate-bounce">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  to="#about"
                >
                  <ChevronDownIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">About</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Full Stack Snacks with Remix</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    They use <a className="underline" href="https://remix.run/">Remix</a> so I thought I'd whip up an app to try it out. It's great! Especially when combined
                    with <a className="underline" href="https://ui.shadcn.com/">shadcn/ui</a> and the amazing <a className="underline" href="https://v0.dev/">v0</a>.
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    I got the cute (to me at least) icon from Rendi over at <a className="underline" href="https://thenounproject.com/">The Noun Project</a>. Definitely check <a className="underline" href="https://thenounproject.com/creator/rhendysikoembang/">Rendi</a> out
                    if you're looking for cool icons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Full Stack Snacks.</p>
      </footer>
    </div>
  )
}


