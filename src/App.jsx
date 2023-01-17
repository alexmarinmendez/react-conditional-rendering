import NavBar from './components/NavBar'
import Watches from './components/Watches'
import Activities from './components/Activities'

const App = () => {
  const { isAuthenticated, isLoading } = {isAuthenticated: false, isLoading: false}

  isLoading && <h2>Loading...</h2>

  return (
    <>
      <NavBar />
      {
        isAuthenticated && (
          <>
            <Watches />
            <Activities />
          </>
        )
      }
      
    </>
  )
}

export default App