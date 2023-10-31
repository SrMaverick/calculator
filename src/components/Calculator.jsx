import React, { useState } from "react"
import styled from "styled-components"


const Zero = styled.button`
width: 8.5em;
height: 4em;
border: none;
border-radius: 4em;
margin: 0.8em;
color: white;
background-color: grey;
cursor: pointer;
font-family: 'Roboto', sans-serif;
font-size: 15px;
`
const Sinais = styled.button`
width: 4em;
height: 4em;
border: none;
margin: 0.5em;
border-radius: 4em;
cursor: pointer;
background-color: orange;
color: white;
font-family: 'Roboto', sans-serif;
font-size: 15px;
`
const Button = styled.button`
width: 4em;
height: 4em;
border: none;
border-radius: 4em;
margin: 0.5em;
color: white;
background-color: grey;
cursor: pointer;
font-family: 'Roboto', sans-serif;
font-size: 15px;
`
const Linha1 = styled.button`
width: 4em;
height: 4em;
border: none;
border-radius: 4em;
margin: 0.5em;
color: black;
background-color: white;
cursor: pointer;
font-family: 'Roboto', sans-serif;
font-size: 15px;
`
const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Roboto', sans-serif;
`

const Section = styled.section`
border: solid;
border-radius: 2em;
border-color: #0b0b0c;
background-color: black;
width: 24vw;
text-align: center;
`

const H1 = styled.h1`
color: white;
text-align: right;
margin-right: 0.8em;
font-size: 2.5em;
border: black;
`
function Calculator(){
    const [num, setNum] = useState(0)
    const [oldnum, setOldNum] = useState(0)
    const [operator, setOperator] = useState(0)

    function inputNum(e){
        const input = e.target.value
        if(num===0){
            setNum(input)
        }else{
            setNum(num+input)
        }
    }

    function clear(){
        setNum(0)
    }

    function C(){
        if(num.length === 1){
            setNum(0)
        }else{
            setNum(num.slice(0, num.length - 1))
        }
    }

    function porcentage(){
        setNum(num/100)
    }

    function operatorHandler(e){
        let operatorInput = e.target.value
        setOperator(operatorInput)
        setOldNum(num)
        setNum(0)
    }
    
    function result(){
        if(operator==="/"){
            setNum(parseFloat(oldnum) / parseFloat(num))
        } else if(operator === "X"){
            setNum(parseFloat(oldnum) * parseFloat(num))
        } else if(operator === "-"){
            setNum(parseFloat(oldnum) - parseFloat(num))
        } else if(operator === "+"){
            setNum(parseFloat(oldnum) + parseFloat(num))
        }
    }

    return(
        <Main>
            <Section>
                <H1>{num}</H1>
            <div>
                <Linha1 onClick={clear}>AC</Linha1>
                <Linha1 onClick={C}>C</Linha1>
                <Linha1 onClick={porcentage}>%</Linha1>
                <Sinais onClick={operatorHandler} value="/">/</Sinais>
            </div>
            <div>
                <Button onClick={inputNum} value={7}>7</Button>
                <Button onClick={inputNum} value={8}>8</Button>
                <Button onClick={inputNum} value={9}>9</Button>
                <Sinais onClick={operatorHandler} value="X">X</Sinais>
            </div>
            <div>
                <Button onClick={inputNum} value={4}>4</Button>
                <Button onClick={inputNum} value={5}>5</Button>
                <Button onClick={inputNum} value={6}>6</Button>
                <Sinais onClick={operatorHandler} value="-">-</Sinais>
            </div>
            <div>
                <Button onClick={inputNum} value={1}>1</Button>
                <Button onClick={inputNum} value={2}>2</Button>
                <Button onClick={inputNum} value={3}>3</Button>
                <Sinais onClick={operatorHandler} value="+">+</Sinais>
            </div>
            <div>
                <Zero onClick={inputNum} value={0}>0</Zero>
                <Button onClick={inputNum} value=".">,</Button>
                <Sinais onClick={result}>=</Sinais>
            </div>
            </Section>
        </Main>
    )
}
export default Calculator