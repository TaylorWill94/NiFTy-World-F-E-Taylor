import { useState, useEffect }from 'react'
import Videos from '../Components/Videos'
import axios from 'axios'

export default function NFT() {
  const [content, setContent] = useState([])
  const URL = process.env.REACT_APP_API_URL

  useEffect(()=> {
    axios.get(`${URL}/content`)
      .then((response) => {
        setContent(response.data)
      }).catch((error) => {
        throw error
      })
  }, [URL]) 

  
  return (
    <div>
        <h1>What is an NFT?</h1>
        {content.map((c, index)=> {return (
          <div key={index}>
            {c.reading_material}
          </div>
        )})}
        <Videos />
    </div>
  )
}
