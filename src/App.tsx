import React, { Component } from "react";
import { Menus, Page, Products } from "./components";
import axios from "axios";
import { IEntity } from "./types";

interface AppState {
  products: IEntity.IProducts[];
  category: string;
  pathname: string;
}
export default class App extends Component<{}, AppState> {
  state = {
    products: [],
    category: "all",
    pathname: window.location.pathname,
  };
  getProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    // console.log(data.products);
    this.setState({ products: data.products });
  };
  getProduct = async (title: string) => {
    const { data } = await axios.get(
      `https://dummyjson.com/products/category/${title}`
    );
    // console.log(data.products);
    this.setState({ products: data.products });
  };
  componentDidMount(): void {
    this.getProducts();
  }
  handleFilter = (title: string) => {
    this.setState({ category: title });
  };
  handleNavigate = (id: number) => {
    let a = `${id}`;
    this.setState({ pathname: a });
  };

  getPage = (filteredProducts: IEntity.IProducts[]) => {
    switch (this.state.pathname) {
      case "/1":
        return <Page />;
      default:
        return (
          <div className="app-container">
            <Menus onFilter={this.handleFilter} />
            <Products
              products={filteredProducts}
              onNavigate={this.handleNavigate}
            />
          </div>
        );
    }
  };
  render() {
    const { category, products } = this.state;
    const { handleFilter } = this;
    const filteredProducts =
      category === "all"
        ? products
        : products.filter((p: IEntity.IProducts) => p.category == category);
    return <>{this.getPage(filteredProducts)}</>;
  }
}
