import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [string, setString] = useState(false)
  const [theme, setTheme] = useState(true)
  const [balacocaco, setBalaco] = useState(true)
  const [heart, setHeart] = useState(false)
  const [count2, setCount2] = useState(0)

  //https://legacy.reactjs.org/docs/hooks-effect.html
  //https://react.dev/reference/react/useEffect
  //https://www.geeksforgeeks.org/reactjs-useeffect-hook/
  //useEffect() - "lembra" a função que foi passsada (if true = preto / else = branco)
  //elimina o uso do "?/:" (if/else) no botão da linha 50
  //Hook tem que colocar na ordem em que aparece, estava embaixo do "if" e não funcionava
  useEffect(() => { 
    document.body.className = theme ? 'fundo-preto' : 'fundo-branco';
  }, [theme]);

  if(string == "Senai")
  {
    return alert("Apareci!")
  }

  return (
    <>
      {/* <button onClick={()=> setTheme(theme ? false : true)}>MODE</button>
      {theme ?
      <div className='fundo-preto'>
        <h1>HELL</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      :
      <div className='fundo-branco'>
        <h1>HELL</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      } */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      <button onClick={()=> setTheme(theme ? false : true)}>Mode</button>

      <button onClick={()=> setBalaco(balacocaco ? false : true)}>Clique</button>
      {balacocaco ?
        <div className="card">
          <h1>Balacobaco</h1>
        </div>
        :
        <div className="card">
          <h1></h1>
        </div>
      }
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 10)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count - 10)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <h2>{string}</h2>
        <input type="text" onChange={(e) => setString(e.target.value)}/>
      </div>
      <div className="card">
        <button onClick={()=> setHeart(heart ? false : true)}>Like</button>
          {heart ?
          <div className="card">
            <h3>💙{count2 + 1}</h3>
          </div>
          :
          <div className="card">
            <h3>🖤{count2}</h3>
          </div>
        }
      </div>
      
      
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> 
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
