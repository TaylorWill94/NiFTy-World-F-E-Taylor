import React from 'react'
import { Button , Container } from 'react-bootstrap'
import { Link } from "react-router-dom"
 
function Categories() {
  return (
    <Container>
        <h1>Choose your category</h1>
        <Link to='/NFT'>
          <Button variant="primary">NFT</Button>    
        </Link>
        <Button>Crypto</Button>    
        <Button>Finance</Button>    
    </Container>
  )
}

export default Categories