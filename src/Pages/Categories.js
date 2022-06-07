import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Categories() {
  const [category, setCategory] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/categories`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, [id, URL]);

  return (
    <Container className="background">
      <h1 className="my-5">Choose your category</h1>
      <Stack direction="horizontal" gap="4">
        {category.map((category, index) => (
          <Link key={index} to={`/categories/${category.id}`}>
            <Button variant="outline-primary">{category.name}</Button>
          </Link>
        ))}
      </Stack>
    </Container>
  );
}

export default Categories;
