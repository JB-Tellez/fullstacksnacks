import { Link } from "@remix-run/react";
import ChevronDownIcon from "./chevron-down-icon";

export default function Intro() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="hero">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  JB Tellez
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Full-Stack Engineer
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 py-4">
                  Hi there. 
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I am super interested in the work you are doing and would love to talk. Please scroll down to see "at a glance" how my experience lines up.
                </p>
              </div>
              <div className="animate-bounce pt-8">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  to="#at-a-glance"
                >
                  <ChevronDownIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
    );
}
