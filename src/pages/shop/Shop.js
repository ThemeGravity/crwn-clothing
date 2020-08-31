import React, { Component } from "react";

import { collections } from "./shop.data";

import PreviewCollection from "../../components/preview-collection/PreviewCollection";

class ShopPage extends Component {
  constructor(props) {
    super();

    this.state = {
      collections
    }
  }

  render() {
    const {collections} = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
            )
          )
        }
      </div>
    )
  }
}

export default ShopPage;
