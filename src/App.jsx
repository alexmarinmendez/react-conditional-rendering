import NavBar from './components/NavBar'
import Watches from './components/Watches'
import Activities from './components/Activities'

const App = () => {
  const { isAuthenticated, isLoading } = {isAuthenticated: true, isLoading: true}

  isLoading && <h2>Loading...</h2>

  if (isAuthenticated) {
    return (
      <>
        <NavBar />
        <Watches />
        <Activities />
      </>
    )
  }

  return (
    <NavBar />
  )
}

export default App