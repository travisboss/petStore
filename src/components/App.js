import React, { Component } from "react";
import "../css/App.css";

import AddAppointments from "./AddAppointments";
import SearchAppointments from "./SearchAppointments";
import ListAppointments from "./ListAppointments";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/planetoftheweb/bcca7bc277762bb14249f6195fe5af3d/raw/f7df629db4949aff136f5147a7b7e826de2c7c3d/ri-data.json"
    )
      .then((res) => res.json())
      .then((result) => {
        const apts = result.map((item) => {
          return item;
        });
        this.setState({
          myAppointments: apts,
        });
      });
  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments />
                <SearchAppointments />
                <ListAppointments />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
