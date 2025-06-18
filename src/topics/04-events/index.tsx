import { useState, type ChangeEvent, type FormEvent } from 'react'

function Component() {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setEmail(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    console.log(data)
  }
   return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='text'
            id='text'
            placeholder='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='email'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type='submit'>send</button>
      </form>
    </div>
  )
}

export default Component
