import React, { Component } from "react";
// import Category from "./category";
import axios from "axios";
interface MenusState {
  categories: String[];
}
interface MenusProps {
  onFilter: (title: string) => void;
}
export default class Menus extends Component<MenusProps, MenusState> {
  state = {
    categories: [],
  };
  getCategories = async () => {
    const { data } = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    this.setState({ categories: data });
  };
  componentDidMount(): void {
    this.getCategories();
  }
  render() {
    const { categories } = this.state;
    const { onFilter } = this.props;
    return (
      <div className="menus">
        <input type="search" placeholder="Search" className="search" />
        <div className="category">
          <div className="title">Category</div>
          <ul>
            <li className="menu" onClick={() => onFilter("all")}>
              All
            </li>
            {categories.map((title) => (
              <li key={title} className="menu" onClick={() => onFilter(title)}>
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="price-part">
          <div className="title">Price</div>
          <div className="price-number">$123.00</div>
          <input type="range" />
        </div>
      </div>
    );
  }
}
