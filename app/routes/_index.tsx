import { Bio } from "~/components/bio"
import Footer from "~/components/footer"
import Header from "~/components/header"

export default function Index() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Bio/>
      </main>
      <Footer />
    </div>
  )
}


