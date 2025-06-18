import { useState } from 'react'

type LinkType = {
    id: number;
    link: string;
    text: string;
}

const navLinks = [
  {id: 1, link: '/home', text: 'home'},
  {id: 2, link: '/about', text: 'about'},
  {id: 3, link: '/contact', text: 'contact'},
]

function Component() {
  const [text, setText] = useState('')
  const [number, setNumber] = useState(1)
  const [list, setList] = useState<string[]>([])
  const [links, setLinks] = useState<LinkType[]>(navLinks)
  return (
    <div>
      <button 
        // onClick={() => setText('demo')}
        // onClick={() => setNumber(1)}
        // onClick={() => setList(['one', 'two'])}
        onClick={() => setLinks([...links, {id: 4, link: '/profile', text: 'about'}])}
      >
        click me
      </button>
    </div>
  )
}

export default Component
