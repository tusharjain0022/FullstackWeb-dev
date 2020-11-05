import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }
  renderComment(dish) {
    if (dish != null) {
      const comments = this.props.dish.comments.map((comment) => {
        return (
          <div>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author} , {comment.date}
            </p>
            <br></br>
          </div>
        );
      });
      return (
        <Card>
          <CardBody>
            <h4>Comments</h4>
            {comments}
          </CardBody>
        </Card>
      );
    } else return <div></div>;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComment(this.props.dish)}
        </div>
      </div>
    );
  }
}
export default DishDetail;
