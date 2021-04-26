import React from 'react';
class BeaHornedst extends React.Component {
   
    render() {
        return (
            <div>
                <h1>
                {this.props.title}
                </h1>
                <img src={this.props.imageUrl}alt={this.props.title} title={this.props.title} />
                <p>
                {this.props.description}
                </p>
            </div>
        )
    };
}
export default HornedBeast;
