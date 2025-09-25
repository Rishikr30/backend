import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)

  const [todos, setTodos] = useState([
    {
      title: "Study Todo",
      desc: "I am Study reminder"
    },
    {
      title: "Coding Todo",
      desc: "I am codin practice reminder"
    },
    {
      title: "Home Todo",
      desc: "I am Home work reminder"
    }
  ])

  // const a = useRef(0);

  const ToDo = ({ todo }) => {
    return (<>
      {/* <div className='m-4 border border-purple-400'>

  <div className='todo'>{todo.title}</div>
  <div className='todo'>{todo.desc}</div>
</div> */}
    </>)
  }


  // useEffect(() => {
  //   a.current = a.current +1;
  //   console.log(`rerendring...and the value of a is ${a.current}`);

  // });


  // useEffect(() => {
  // alert("Welcome to my React web");
  // }, [])


  // useEffect(() =>{
  //   alert("Count was changed");
  // },[count])


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>Show btn is True</button> :
        <button>Showbtn is false</button>}

      {todos.map(todo => {
        // return <ToDo key ={todo.title} todo={todo}/>
        return (<div key={todo.title} className='m-4 border border-purple-400'>

          <div className='todo'>{todo.title}</div>
          <div className='todo'>{todo.desc}</div>
        </div>)
      })}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle Showbtn
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
