import React from "react"
import Calculator from "./components/Calculator"
import styled from "styled-components"

const Titulo = styled.h1`
font-family: 'Roboto', sans-serif;
text-align: center;
font-size: 1.5em;
`

function App(){
  return(
    <>
      <Titulo>CALCULADORA</Titulo>
      <Calculator/>
    </>
  )
}
export default App