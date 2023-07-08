import React, { Component } from "react";
import "../assets/css/main.scss";
import { IEntity } from "../types";

interface ProductProps {
  product: IEntity.IProducts;
  onNavigate: (id: number) => void;
}

export default class Product extends Component<ProductProps> {
  handleNavigate = (id: number) => {
    window.history.pushState({}, "", `${id}`);
    this.props.onNavigate(id);
  };
  render() {
    const { product } = this.props;
    const { thumbnail, title, price, id } = product;
    return (
      <div className="product" onClick={() => this.handleNavigate(id)}>
        <div className="img-box">
          <img src={thumbnail} alt="" />
        </div>
        <div className="content">
          <p className="title">{title}</p>
          <p className="price">${price}</p>
        </div>
      </div>
    );
  }
}
