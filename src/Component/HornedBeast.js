import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClick: 0
    };
  }
  sumNumberOfClick = () => {
    this.setState({ numOfClick: this.state.numOfClick + 1 });
  }
  render() {
    return (
      <div>{
        <Card style={{ width: '18rem', margin: "20px" }}>
          <Card.Img variant="top" src={this.props.url} />
          <Card.Body>
            <Card.Title>
              {this.props.description}
            </Card.Title>

            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              {this.state.numOfClick} ❤️
            </Card.Text>
            <Button onClick={this.sumNumberOfClick} variant='primary'>Add Click
            </Button>
          </Card.Body>
        </Card>
      }

      </div>
    );
  }
}
export default HornedBeast;
