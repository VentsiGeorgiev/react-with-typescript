import { useReducer } from "react"
import { counterReducer, initialState } from "./reducer"

function Component() {
  const [state, dispatch] = useReducer(counterReducer, initialState)
  return (
    <>
    <div>Count: {state.count}</div>
    <div>Status: {state.status}</div>
    <div>
      <button onClick={() => dispatch({type: 'increment'})}>increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button>
    </div>
    <div>
      <button onClick={() => dispatch({type: 'setStatus', payload: 'active'})}>Set action to active</button>
      <button onClick={() => dispatch({type: 'setStatus', payload: 'inactive'})}>Set action to inactive</button>
    </div>
    </>
  )
}

export default Component