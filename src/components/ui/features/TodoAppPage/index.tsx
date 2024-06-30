import React from 'react'
import { Button } from "../../button"
import TodoContainer from '../Todo/TodoContainer'
import Container from '../../Container'

const  TodoAppPage=()=> {
  return (
    <Container>
      <h1 className=' text-center font-semibold my-10'>My Todos</h1>
      <TodoContainer/>
      {/* <Button>Click Me</Button> */}
    </Container>
  )
}

export default TodoAppPage
