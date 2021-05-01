import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormBeast extends React.Component {
  newState = horns => this.props.updatesState(horns);
  filterHorns = (event) => {
    event.preventDefault();
    this.props.filterData(event);
  }

  render() {
    return (
      <Form onSubmit={this.filterHorns}>
        <Form.Group controlId="exambleForm.ControlSelect1">
          <Form.Label>Select the number of horns</Form.Label>
          <Form.Control onChange={this.newState} as="select" name="numberOfHorns" defaultValue={'All'}>
            <option value="All" selected>All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Control>
          <Button variant="primary" type="submeit">
            Filter
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default FormBeast;
