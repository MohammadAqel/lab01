import React from 'react';
import Form from './form';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: ''
    };
  }
  render() {
    return (
      <div>
        <header>
          <h1>Hello From My Beast Home</h1>
          <Form
            filterData={this.props.filterData}
            numberOfHorns={this.props.numberOfHorns}
            updateState={this.props.updateState}
          />
        </header>
      </div>
    );
  }
}
export default Header;
