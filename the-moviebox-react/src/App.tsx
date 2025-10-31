import { MovieContent } from "./cases/movies/components/movie-content.tsx"
import { Footer } from "./components/layout/footer.tsx"
import { Header } from "./components/layout/header.tsx"
import { Navbar } from "./components/layout/navbar.tsx"

function App() {


  return (
    <>
      <Header/>
      <main>
        <Navbar />
        <MovieContent />
      </main>
      <Footer/>
    </>
  )
}

export default App