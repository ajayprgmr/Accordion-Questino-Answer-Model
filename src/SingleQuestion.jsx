import { useState } from 'react'
import './App'
import './App.css'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

function SingleQuestion({ id, question, answer }) {
  const [showAns, setShowAns] = useState(false)
  const handleClick = () => {
    setShowAns(!showAns)
  }

  return (
    <div className='container'>
      <h4 className='single-question'>
        {`${id}. `}
        {question}
        {showAns ? (
          <AiOutlineMinusCircle onClick={handleClick} className='btn' />
        ) : (
          <AiOutlinePlusCircle onClick={handleClick} className='btn' />
        )}
      </h4>
      {showAns ? <p className='answer'>{answer}</p> : null}
    </div>
  )
}

export default SingleQuestion
