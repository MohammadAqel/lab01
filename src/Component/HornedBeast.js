import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClick: 0,
      show: false
    };
  }
  sumNumberOfClick = () => {
    this.setState({ numOfClick: this.state.numOfClick + 1 });

  }
  showAnimals = () => {
    this.setState({ show: true }),
    this.setState({ numOfClick: this.state.numOfClick + 1 });
  }
  stopAnimals = () => {
    this.setState({ show: false });

  }
  render() {
    return (
      <div>{
        <Card style={{ width: '18rem', margin: "20px" }}>
          <Card.Img onClick={this.showAnimals} variant="top" src={this.props.url} />
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
          </Card.Body>
        </Card>
      }
      <SelectedBeast show={this.state.show}
        handleClose={this.stopAnimals}
        title={this.props.title}
        description={this.props.description}
        url={this.props.url}
      />


      </div>
    );
  }
}
export default HornedBeast;
