export default function Skills() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="skills">
            <div className="container px-4 md:px-6">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Skills</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Expertise and Capabilities</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                        <div className="flex flex-col items-center gap-2">
                            <CodeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <div className="text-sm font-medium">Full-Stack Development</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <CpuIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <div className="text-sm font-medium">System Architecture</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <UsersIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <div className="text-sm font-medium">Collaboration</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <RocketIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <div className="text-sm font-medium">Product Leadership</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <CodeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <div className="text-sm font-medium">TypeScript</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <ComponentIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <div className="text-sm font-medium">React</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <NetworkIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <div className="text-sm font-medium">Node.js</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <CloudIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <div className="text-sm font-medium">Cloud Deployment</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CloudIcon(props) {
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
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    )
}


function CodeIcon(props) {
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
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}


function ComponentIcon(props) {
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
            <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
            <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
            <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
            <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
        </svg>
    )
}


function CpuIcon(props) {
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
            <rect width="16" height="16" x="4" y="4" rx="2" />
            <rect width="6" height="6" x="9" y="9" rx="1" />
            <path d="M15 2v2" />
            <path d="M15 20v2" />
            <path d="M2 15h2" />
            <path d="M2 9h2" />
            <path d="M20 15h2" />
            <path d="M20 9h2" />
            <path d="M9 2v2" />
            <path d="M9 20v2" />
        </svg>
    )
}
function NetworkIcon(props) {
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
            <rect x="16" y="16" width="6" height="6" rx="1" />
            <rect x="2" y="16" width="6" height="6" rx="1" />
            <rect x="9" y="2" width="6" height="6" rx="1" />
            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
            <path d="M12 12V8" />
        </svg>
    )
}


function RocketIcon(props) {
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
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    )
}


function UsersIcon(props) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}