import Glance from "~/components/glance"
import Experience from "./experience";
import Footer from "./footer";
import Header from "./header";
import Intro from "./intro";

export default function Pitch() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 px-4">
        <Intro />
        <Glance />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}
