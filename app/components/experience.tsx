export default function Experience() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32" id="experience">
          <div className="container px-4 md:px-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Experience</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Proven Track Record</h2>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <BriefcaseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                    <div className="space-y-1">
                      <div className="text-lg font-semibold">Principal Instructor</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <a className="underline" href="https://www.codefellows.org/">Code Fellows</a> | 2017 - 2024
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                  Trained adult learners with little to no coding experience to advanced levels in JavaScript and Python. Co-created curriculum that plays to individual strengths for rapid yet solid progress. Managed instructor team with focus on supporting underrepresented groups in tech.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <BriefcaseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                    <div className="space-y-1">
                      <div className="text-lg font-semibold">Director of Engineering</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <a className="underline" href="https://rippleeffects.com/">Ripple Effects</a> | 2012 - 2017
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                  Developed desktop, mobile, and web applications for preK-12 learners using various languages and frameworks. Collaborated with educators to enhance application effectiveness. Researched and implemented best development tools and practices, reducing risk and improving efficiency. Contributed to strategic decision-making with leadership.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <BriefcaseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                    <div className="space-y-1">
                      <div className="text-lg font-semibold">Sr. Software Engineer</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <a className="underline" href="https://smashingideas.com/">Smashing Ideas</a> | 2010 - 2012
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                  Spearheaded online game development from concept to launch, leading teams on large-scale game suites. Optimized tools and workflows for web and mobile development. Collaborated with clients to design engaging game mechanics and balance gameplay for maximum user experience.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <BriefcaseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                    <div className="space-y-1">
                      <div className="text-lg font-semibold">Sr. Software Engineer</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <a className="underline" href="https://scilearn.com/">Scientific Learning</a> | 1999 - 2009
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                  Created educational games to enhance literacy for k-12 learners. Led front-end development team, implemented middleware for seamless communication between display and Java backend. Conducted code reviews, developed educational apps, and designed data upload and persistence strategies. Researched and evaluated cutting-edge development tools and processes, including XP, TDD, UML, and Design Patterns, to optimize team efficiency and product quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}


function BriefcaseIcon(props) {
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
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    )
  }