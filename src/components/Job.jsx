import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  console.log(data);

  const dispatch = useDispatch();
  const disableButton = useSelector((state) => state.favouriteCompany.content);
  console.log("dis ", typeof disableButton, "data ", typeof data.company_name);
  return (
    <Row className="mx-0 mt-3 p-3 align-items-center" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Button
          disabled={
            disableButton.find((companySave) => {
              return companySave === data.company_name;
            })
              ? true
              : false
          }
          variant="warning"
          onClick={() => {
            dispatch({ type: "SAVE_ON_FAVOURITE", payload: data.company_name });
          }}
        >
          Save Company
        </Button>
      </Col>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
