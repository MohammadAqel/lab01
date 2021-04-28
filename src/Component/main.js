import React from 'react';
import HornedBeast from './HornedBeast';
import arr from './arr.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
class Main extends React.Component {

  render() {
    return (
      <div>
        <Container>
          <Row>
            {
              arr.map((carta) => {
                return (
                  <HornedBeast
                    url={carta.image_url}
                    title={carta.title}
                    description={carta.description}
                    keyword={carta.keyword}
                    horns={'1'} />
                );
              })

            }
          </Row>
        </Container>
      </div>
    );
  }
}
export default Main;

