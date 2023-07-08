import React, { Component } from "react";
import "../assets/css/main.scss";
import Product from "./product";
import { IEntity } from "../types";

interface ProductsProps {
  products: IEntity.IProducts[];
  onNavigate: (id: number) => void;
}
interface ProductsState {
  sortBy: string;
}

export default class Products extends Component<ProductsProps, ProductsState> {
  state = {
    sortBy: "lowest",
  };
  handleSort = (value: string) => {
    this.setState({ sortBy: value });
  };
  render() {
    const { products, onNavigate } = this.props;
    const { handleSort } = this;
    return (
      <div className="products">
        <div className="nav">
          <div className="icons">
            <i className="fa-solid fa-border-all grid-icon"></i>
            <i className="fa-solid fa-grip-lines grid-icon"></i>
          </div>
          <div>{products.length} Products Found</div>
          <hr className="line" />
          <div>Sort By</div>
          <select
            id=""
            className="form-control"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="lowest">Price(Lowest) </option>
            <option value="highest">Price(Highest) </option>
            <option value="a-z">Name (A-Z)</option>
            <option value="z-a">Name (Z-A)</option>
          </select>
        </div>
        <div className="main">
          {products.length != 0 ? (
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onNavigate={onNavigate}
              />
            ))
          ) : (
            <h1>Product not Found</h1>
          )}
        </div>
      </div>
    );
  }
}
