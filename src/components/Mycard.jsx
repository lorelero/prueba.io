import Card from 'react-bootstrap/Card';
import Tags from './tags';

function Mycard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Tags text={props.text} color={props.color} />
      </Card.Body>
    </Card>
  );
}

export default Mycard;