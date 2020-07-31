import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props){
        super(props);
        this.state = {
           comment : [
               {
                   id:"1",
                   review:"Imagine all the eatables, living in conFusion!",
                   author:"John Lemon, Oct 17, 2012"
               },
               {
                   id:"2",
                   review:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                   author:"Pail McVites , Sep 06, 2014"
               },
               {
                id:"3",
                review:"Eat it, just eat it!",
                author:"Michael Jaikishan , Feb 14, 2015"
            },
            {
                id:"4",
                review:"Ultimate, reaching for the stars!",
                author:"Ringo Starry , Dec 03, 2013"
            },
            {
                id:"5",
                review:"Its your birthday, we're gonna party!",
                author:"25 Cent , Dec 03, 2011"
            }
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
    renderComment(dish) {
        const rev = this.state.comment.map((comment) => {
            return (
            <li><br></br>{comment.review}<br></br>--{comment.author}</li>
            );
        });
        if (dish != null)
         return(
            <div  className="col-12 col-md-5 m-1"><h4>Comments</h4>
            <ul className="list-unstyled">{rev}</ul>
            </div>
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
               {this.renderComment(this.props.selected)}
            </div>
        );
    }
}
export default Dishdetail;