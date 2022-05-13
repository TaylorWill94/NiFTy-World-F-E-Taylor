import React from 'react'
import { Button , Container } from 'react-bootstrap'

function Categories() {
  return (
    <Container>
        <h1>Choose your category</h1>
        <Button>NFT</Button>    
        <Button>Crypto</Button>    
        <Button>Finance</Button>    
    </Container>
  )
}

export default Categories