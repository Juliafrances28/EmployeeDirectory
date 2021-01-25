import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import Detail from "./ Detail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    emplist: [],
    search: "",
  };

  // When this component mounts, search for the employees 
  componentDidMount() {
    this.loadRandomEmp("John");
  }

  loadRandomEmp = (query) => {
    API.getRandomUser(query)
      .then((res) => this.setState({ emplist: res.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a particular employee"}
            >
              {this.state.result.Title ? (
                <Detail
                  title={this.state.result.Title}
                  src={this.state.result.picture}
                 Name={this.state.result.name}
                  job={this.state.result.Job}
                  email={this.state.result.Email}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
