import { useEffect, useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favouriteCompany.content);
  const removeFavourite = useDispatch();
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
  const [favouriteResponse, setFavouriteResponse] = useState(null);

  const fetchFavourites = async () => {
    const response = await fetch(baseEndpoint + favourites);
    const data = await response.json();
    setFavouriteResponse({ data });
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10}>
          <h2>Your Favourite Company List</h2>
          <p>Click a Company for more info</p>
        </Col>
        <Col xs={10}>
          <ListGroup>
            {favourites.map((company, i) => {
              return (
                <>
                  <Link to={`/${company}`}>
                    <ListGroup.Item>{company}</ListGroup.Item>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => {
                      removeFavourite({ type: "REMOVE_ITEM_FROM_FAVOURITE", payload: i });
                    }}
                  >
                    Remove
                  </Button>
                </>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
