import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props){
        super(props);
        this.state = {
           comment : [
               {
                   id:"1",
                   review:"abcd",
                   author:"tushar"
               },
               {
                   id:"2",
                   review:"1234",
                   author:"jain"
               },
           ],
        };
    }
    renderDish(dish) {
        if (dish != null)
         return(
            <Card>
            <CardImg width="100%" top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
         );
         else
          return(
              <div></div>
          );
    }
    render() {
        return (
            
            <div className="row">
              <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.selected)}
              </div>
            </div>
        
        );
    }
}
export default Dishdetail;