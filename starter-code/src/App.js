import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import CountryDetail from "./component/CountryDetail";
import countries from "./countries.json";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div
                className="col-5"
                // style="max-height: 90vh; overflow: scroll;"
                style={{ maxHeight: "90vh", overflow: "scroll" }}
              >
                <div className="list-group">
                  {/* A GERER */}
                  {countries.map(country => {
                    const { name, cca3 } = country;
                    return (
                      <Link
                        className="list-group-item list-group-item-action"
                        to={`/${cca3}`}
                      >
                        {name.common}
                      </Link>
                    );
                  })}
                  {/* <a
                    className="list-group-item list-group-item-action"
                    href="/ABW"
                  >
                    🇦🇼 Aruba
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
