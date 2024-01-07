import { useState } from 'react'
import data from '../data.jsx'
import Questions from './Quetions.jsx'

function App() {
  const [questions, setQuestions] = useState(data)
  // console.log(quetions)
  return (
    <main>
      <Questions questions={questions} />

    </main>
  )
}

export default App
