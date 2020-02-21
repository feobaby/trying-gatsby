import React, { Component } from "react"
import  { SearchBox } from "../components/search-box/search"


    class Searching extends Component {
      constructor() {
        super();

        this.state = {
          searchField: ''
        };

        this.handleChange = this.handleChange.bind(this);
      }
    

        handleChange = e => {
          this.setState({ searchField: e.target.value })
        }

      render() { 

        return (
      <SearchBox
      placeholder = 'search monsters'
      handleChange = {this.handleChange}
     />
    );
    }
  }


export default Searching;