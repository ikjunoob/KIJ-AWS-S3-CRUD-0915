import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileList from './components/FileList'
import UploadForm from './components/UploadForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UploadForm />
      <FileList />
    </>
  )
}

export default App
