import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class BeaHornedst extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfClike: 0
        }
    }
    suumNumberOfClike = () => {
        this.setState({ numOfClike: this.state.numOfClike + 1 })
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
                            {this.state.numOfClike}
                        </Card.Text>
                        <Button onClick={this.suumNumberOfClike} variant='primary'>Add Clikcs
                    </Button>
                    </Card.Body>
                </Card>
            }

            </div>
        )
    };
}
export default HornedBeast;
