import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
function CardGroup1(props) {
  return (
    props.title.map(item => {
      return <div className="col-md-4 col-sm-12 mb-4">
        <Card className={`card-${props.mode} bg-${props.mode}`}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title className={`text-${props.mode==='light'?'dark':'light'}`}>{item}</Card.Title>
            <Card.Text className={`text-${props.mode==='light'?'dark':'light'}`}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    })
  );
}
export default CardGroup1;
