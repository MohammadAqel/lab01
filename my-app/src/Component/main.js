import React, { createFactory } from 'react';
import HornedBeast from './HornedBeast';
import arr from './arr';
class Main extends React.Component {

  render() {
    return (
      <div>
{
        arr.map((carta) =>{
        return(
        <HornedBeast
          url={carta.image_url}
          title ={carta.title}
          description={carta.description}
          keyword={carta.keyword}
          horns={'1'}/>
        )
      })

    }
      </div>
    )
  }
}
export default Main;
