import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0)
const [string, setString] = useState(false)
const [theme, setTheme] = useState(true)
const [balacocaco, setBalaco] = useState(true)
const [heart, setHeart] = useState(false) //Criado para o Like
const [count2] = useState(0) //Criado para contar o Like
const [string2, setString2] = useState(false) //Criado para a Postagem
const [postagem, setPostagem] = useState(false) //Criado para o botão de Postagem
const [postagem2, setPostagem2] = useState(false) //Adicionado para o botão do Formulário (nome)
const [postagem3, setPostagem3] = useState(false) //Adicionado para o botão do Formulário (email)
const [postagem4, setPostagem4] = useState(false) //Adicionado para o botão do Formulário (idade)
const [nome, setNome] = useState(false)
const [email, setEmail] = useState(false)
const [idade, setIdade] = useState(false)
const [formDados, setFormDados] = useState([])

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
    alert("Apareci!")
    // Retirei o "return (ao fechar deixava a página em branco...)"
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

    <div className='box'>

        <div className='left'>
            {/* DARK MODE */}
            <button onClick={()=> setTheme(theme ? false : true)}>Mode</button>
            <br /><br />
            <button onClick={()=> setBalaco(balacocaco ? false : true)}>Clique</button>
            {balacocaco ?
                <div className="card">
                <h3>Balacobaco</h3>
                </div>
                :
                <div className="card">
                <h3></h3>
                </div>
            }
            {/* CONTADORES */}
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
        </div>

        <div className='center'>
            {/* INPUT + ALERT */}
            <div className="card">
                <h4>{string}</h4>
                <input type="text" onChange={(e) => setString(e.target.value)}/>
            </div>
            <div className="card">
                {/* POSTAGEM */}
                <h4>{postagem}</h4>
                <input type="text" onChange={(e) => setString2(e.target.value)}/>
                <p>{string2.length}</p> {/* CONTAGEM DOS CARACTERES */}
                <br /><br />
                <button onClick={() => setPostagem(string2)}>Postar</button>
            </div>
            <div className="card">
                {/* LIKE */}
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
        </div>

        <div className='right'>
            <div className="card">
                {/* FORMULÁRIO */}
                {/* Adaptar novas variáveis para o Formulário */}
                <h4>Nome: {postagem2}</h4>
                <input type="text" onChange={(e) => setNome(e.target.value)}/>
                <br /><br />
                <button onClick={() => setPostagem2(nome)}>Postar Nome</button>
                <br /><br />
                <h4>Email: {postagem3}</h4>
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                <br /><br />
                <button onClick={() => setPostagem3(email)}>Postar Email</button>
                <br /><br />
                <h4>Idade: {postagem4}</h4>
                <input type="number" onChange={(e) => setIdade(e.target.value)}/>
                <br /><br />
                <button onClick={() => setPostagem4(idade)}>Postar Idade</button>

                {/* FORMULÁRIO COM PUSH*/}
                {/* <h4>Nome: </h4>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <br /><br />
                <h4>Email: </h4>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
                <h4>Idade: </h4>
                <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
                <br /><br />
                <button onClick={() => {
                    formDados.push({ nome, email, idade }); // Adiciona diretamente os dados na lista
                    setFormDados([...formDados]);
                    setNome(''); setEmail(''); setIdade(''); // Limpa os campos
                }}>
                    Postar</button>
                <br /><br /> */}

                {/* Exibindo os dados */}
                {/* ??? ao apertar o botão, adiciona uma novos dados na lista(não substitui) ???? */}
                {/* <div>
                    <h4>Dados:</h4>
                    {formDados.map((entry, index) => (
                    <div key={index}>
                        <p>Nome: {entry.nome}</p>
                        <p>Email: {entry.email}</p>
                        <p>Idade: {entry.idade}</p>
                    </div>
                    ))}
                </div> */}
            </div>

            {/* <p>
            Edit <code>src/App.jsx</code> and save to test HMR
            </p> 
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p> */}
        </div>

    </div>
    </>
)
}

export default App
