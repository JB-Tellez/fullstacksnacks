export default function Glance() {
  return (
    <section className="w-full py-8 bg-gray-100 dark:bg-gray-800" id="at-a-glance">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div className="space-y-2">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">At a Glance</div>
                
           <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Me at a Glance</h1>

          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckIcon className="h-6 w-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">8+ years building fullstack interactive web applications</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  I've got 20 years experience building full stack web and mobile applications, primarily in educational technology.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckIcon className="h-6 w-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Capable of designing simple yet resilient system and application architectures</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  As Albert Einsten (<a className="underline" href="https://www.nature.com/articles/d41586-018-05004-4">sort of</a>) said, As simple as possible and no simpler.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckIcon className="h-6 w-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Highly collaborative working style and able to communicate ideas and decisions well</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  I've been an instructor teaching advanced Python and JavaScript for 7 years.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckIcon className="h-6 w-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">You’ve led at least one product-focused engineering team</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  I've led many. The largest ones for <a className="underline" href="https://rippleeffects.com/programs">Ripple Effects</a> where I led the architecture and implementation of a suite of web/mobile applications that have reached millions of students.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckIcon className="h-6 w-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Proficient in Typescript, React and Node</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  I've worked with (and taught) React for several years. I've also developed with Vue and Angular. I prefer to use Typescript, but can drop into JavaScript too.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500">
                  <CircleDashedIcon className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Competent in cloud deployment and cloud management practices (e.g. kubernetes)</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  No check mark for this one. I have developed and deployed applications using Docker. But I used Compose for orchestration not Kubernetes as the applications were smaller scale. I am familiar with the needs that Kubernetes meets for scalability, high availability, etc.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckIcon className="h-6 w-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Care about the monitoring, alerting and processes that reduce risk so the team can sleep easily at night</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Step 1 for any project is risk assessment. Step 1.1 is to integrate processes to address those risks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckIcon className="h-6 w-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Interested in and want to learn about the latest AI technologies</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Extremely interested! In fact, I used the groundbreaking <a className="underline" href="https://v0.dev/">v0</a> to design the components used by this site.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckIcon className="h-6 w-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Bonus: worked on creative or educational platforms in the past</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  That's what I've done for my whole career!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckIcon className="h-6 w-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Bonus: experience with Remix or Python</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  I've taught Advanced Python to hundreds of students.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Remix I've used less. Though I did use it to build this site and loved it ;)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function CircleDashedIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
      <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
      <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
      <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
      <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
      <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
      <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
      <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
    </svg>
  )
}
