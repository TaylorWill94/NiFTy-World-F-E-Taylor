import axios from "axios";
import { useState, useEffect} from "react";
import { Button, Container } from "react-bootstrap";
import { Link , useParams} from "react-router-dom";

function Categories() {
  const [category, setCategory] = useState([])
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams()

  useEffect(()=>{
      axios.get(`${URL}/categories`)
        .then((response)=> {
          setCategory(response.data)
        })
        .catch((error) => {
          throw error
        })

  },[id, URL])

  return (
    <Container>
      <h1>Choose your category</h1>
      {category.map((category, index) => (
        <Link key={index} to={`/categories/${category.id}`}>
          <Button>
          {category.name}
          </Button>
        </Link>

      ))}
    </Container>
  );
}

export default Categories;
