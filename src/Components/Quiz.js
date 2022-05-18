import React from 'react'
import { Container, Table } from 'react-bootstrap'

function Quiz() {
  return (
    <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Questions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>How can you purchase NFTs?</td>
                </tr>
                <tr>
                <td>2</td>
                <td>How can you mint an NFT?</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>What are some of methods that are in place to store your NFTs?</td>
                </tr>
            </tbody>
        </Table>
    </Container>
  )
}

export default Quiz