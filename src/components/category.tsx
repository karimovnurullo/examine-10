import axios from "axios";
import React, { Component } from "react";
import "../assets/css/main.scss";

interface CategoryState {
  categories: String[];
}
export default class Category extends Component<{}, CategoryState> {
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
    return (
      <div className="category">
        <div className="title">Category</div>
        <ul>
          <li className="menu">All</li>
          {categories.map((title) => (
            <li key={title} className="menu">
              {title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
