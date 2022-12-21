
import './App.css'
import Loader from './components/Loader'
import Album from './components/Album'

function App() {
  let isLoading = false
  return (
    <div className="App">
      <Album></Album>
    </div>
  )
}

export default App
