import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react'

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
          <Segment>
              <Image src={itemObj.imageUrls[0]} size='medium' centered/>
              {itemObj.description}
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment>
            <Grid centered>
              <Grid.Row>
                  <h2>$180</h2>
                  <h4>{temp.title}</h4>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid>

    );
  }
}


export default ItemDetail;



      // <Grid centered>
      //   <Grid.Column width={10}>
      //     <Image src={itemObj.imageUrls[0]} />
      //     {itemObj.description}
      //   </Grid.Column>
      //   <Grid.Column width={6}>
      //     $180

      //     {temp}
      //   </Grid.Column>
      // </Grid>