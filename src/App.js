import { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Person from "./component/Person";

class App extends Component {
  state = {
    isVisible: false,
  };

  toggleButton = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    return (
      <div className="myApp">
        <div className="text-center my-5">
          <button
            className="btn btn-sm btn-primary text-center mx-auto"
            onClick={this.toggleButton}
          >
            {this.state.isVisible ? "Hide profile" : "Show profile"}
          </button>
        </div>
        {this.state.isVisible && <Person />}
        {!this.state.isVisible && (
          <h6 className="text-center">
            Click to the buttom above to show my profile
          </h6>
        )}
      </div>
    );
  }
}

export default App;
