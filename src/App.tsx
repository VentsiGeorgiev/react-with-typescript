import './App.css'
import Component from './topics/02-props'

function App() {
  return (
    <>
      <h1>React with TypeScript</h1>
      <Component name='peter' id={123}><h2>Hello world</h2></Component>
      <Component name='john' id={1234} />
    </>
  )
}

export default App
