import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    let _this = this;
    let postId = this.props.params.postId;
    let itemObj = this.props.items.filter(function (item) {
      return item.postId == _this.props.params.postId;
    })[0];
    let temp = JSON.stringify(itemObj);
    return (
      <Grid centered>
        <Grid.Column width={10}>
          <Image src={itemObj.imageUrls[0]} />
          {itemObj.description}
        </Grid.Column>
        <Grid.Column width={6}>
          $180

          {temp}
        </Grid.Column>
      </Grid>
    );
  }
}


export default ItemDetail;