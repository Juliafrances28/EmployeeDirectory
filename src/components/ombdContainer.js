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
    result: [],
    emplist: [],
    search: "",
  };

  // When this component mounts, search for the employees
  componentDidMount() {
    this.loadRandomEmp("John");
  }
  loadRandomEmp = (query) => {
    API.getRandomUser(query)
      .then((res) => {
        console.log(res);
        this.setState({ result: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  emplist = (id) => {
    // Filter this.state.emplist for employees
    const employees = this.state.employees.filter();
    // Set this.state.employees equal to the new employee array
    this.setState({ employees });
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
    this.setState({ search: value });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.result);
    // this.getRandomUser (this.state.results);
  };

  render() {
    const employees = this.state.result
      .filter((data) => {
        if (this.state.search == "") {
          return data;
        } else if (
          data.name.first
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
        ) {
          return data;
        }
      })
      .map((data) => {
        return <Detail listE={data} />;
      });

    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={
                this.state.result.Title || "Search for a particular employee"
              }
            >
              {employees.length > 0 ? (
                employees
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
