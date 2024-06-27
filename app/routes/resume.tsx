import { Link } from "@remix-run/react";
import Header from "~/components/header"
import Footer from "~/components/footer"

export default function Resume() {
  return (

    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">


        <div className="font-sans leading-normal tracking-normal">

          <div className="max-w-4xl mx-auto p-8">
            <section className="mb-8">
              <h1 className="text-4xl font-bold">JB Tellez</h1>
              <p className="text-xl mt-2">Educational Software Engineer & Instructor</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <address className="not-italic">
                <p>JB Tellez</p>
                <p>1010 S. Thistle St. Seattle, WA 98108</p>
                <p>206.763.3866</p>
                <p><a href="mailto:jb.tellez@gmail.com" className="text-blue-500">jb.tellez@gmail.com</a></p>
                <p><a href="https://linkedin.com/in/jb-tellez" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a></p>
              </address>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <ul className="list-disc list-inside">
                <li>Programming Languages: JavaScript, TypeScript, Python, SQL, HTML, CSS, Java, Ruby, BASH</li>
                <li>Tools/Frameworks: React, Next.js, Django, Django Rest Framework, Ruby on Rails, PostgreSQL, Node.js, Express, MongoDB, Docker, AWS, Angular, Vue</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Code Fellows / Principal Instructor</h3>
                <p className="italic mb-2">2017 - 2024, Seattle, WA</p>
                <ul className="list-disc list-inside">
                  <li>Instructed adult learners moving from low/no code backgrounds to advanced level JavaScript, Python, and Java.</li>
                  <li>Collaborated to create curriculum that leverages diverse learners' strengths to achieve rapid but sound success.</li>
                  <li>Managed instructional team by holding regular training sessions with instructors, particularly addressing the challenges of veterans and students underrepresented in the tech industry.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold">Ripple Effects / Director of Engineering</h3>
                <p className="italic mb-2">2012 - 2017, San Francisco, CA</p>
                <ul className="list-disc list-inside">
                  <li>Engineered desktop, mobile, and web applications for preK-12 learners using multiple languages and frameworks.</li>
                  <li>Coordinated with educators in the field to improve application efficacy.</li>
                  <li>Researched, evaluated, and implemented leading development tools and practices.</li>
                  <li>Implemented risk reduction and efficiency improvement practices.</li>
                  <li>Collaborated with leadership on strategic decisions.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold">Smashing Ideas / Sr. Developer</h3>
                <p className="italic mb-2">2010 - 2012, Seattle, WA</p>
                <ul className="list-disc list-inside">
                  <li>Designed and implemented online games, leading projects from ideation to maintenance.</li>
                  <li>Led a development team for large suites of games and activities.</li>
                  <li>Evaluated and optimized tools in the web and mobile space.</li>
                  <li>Collaborated with clients to determine ideal game mechanics and balance gameplay.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold">Scientific Learning / Sr. Software Engineer</h3>
                <p className="italic mb-2">1999 - 2009, Oakland, CA</p>
                <ul className="list-disc list-inside">
                  <li>Developed educational games for k-12 learners to improve literacy.</li>
                  <li>Managed front-end development team.</li>
                  <li>Implemented middleware for communication between display layer and Java back end.</li>
                  <li>Conducted code reviews, programmed educational applications.</li>
                  <li>Designed and implemented strategies for student data upload and persistence.</li>
                  <li>Researched and evaluated development tools and processes such as Extreme Programming, Test-Driven Development, UML, and Design Patterns.</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <ul className="list-disc list-inside">
                <li>Iron Hack / Full Stack Web Development, Barcelona, Spain</li>
                <li>San Francisco State University / Coursework in Creative Writing, San Francisco, CA</li>
                <li>World College West / Coursework in International Relations, Petaluma, CA</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}