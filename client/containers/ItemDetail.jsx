import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let _this = this;
    let postId = this.props.params.postId;
    let itemObj = this.props.items.filter(function (item) {
      return item.postId == _this.props.params.postId;
    })[0];
    let temp = JSON.stringify(itemObj);
    return (
      <Grid columns={2} centered>
        <Grid.Column>
          <Image src={itemObj.imageUrls[0]} />
        </Grid.Column>
      </Grid>
    );
  }
}


export default ItemDetail;