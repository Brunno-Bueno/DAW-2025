import { MovieContent } from "./cases/movies/components/movie-content.tsx"
import { Footer } from "./components/layout/footer.tsx"
import { Header } from "./components/layout/header.tsx"
import Highlights from "./components/layout/Highlight.tsx"
import { Navbar } from "./components/layout/navbar.tsx"

function App() {
  

  return (
    <>
      <Header/>
      <main>
        <Navbar />
        <Highlights />
        <MovieContent />
      </main>
      <Footer/>
    </>
  )
}

export default App