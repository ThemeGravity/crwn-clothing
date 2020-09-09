import React, { Component } from "react";

import shopData from "./shop.data";

import PreviewCollection from "../../components/preview-collection/PreviewCollection";

class ShopPage extends Component {
  constructor(props) {
    super();

    this.state = {
      shopData
    }
  }

  render() {
    const {shopData} = this.state;
    return (
      <div className='shop-page'>
        {
          shopData.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
            )
          )
        }
      </div>
    )
  }
}

export default ShopPage;
