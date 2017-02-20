import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {this.props.params.postId}
      </div>
    );
  }
}


export default ItemDetail;