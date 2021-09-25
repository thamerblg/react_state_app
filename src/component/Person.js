import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import photo from "../photo-profile.jpg";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      person: {
        fullName: "John Doe",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imgSrc: photo,
        profession: "Web Developper",
      },
      timer: 0,
      counter: null,
    };
  }

  componentDidMount = () => {
    //console.log("run componentDidMount ");
    this.setState({
      counter: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  };

  componentWillUnmount = () => {
    //console.log("run componentWillUnmount ");
    clearInterval(this.state.timer);
  };

  render() {
    return (
      <div className="myProfile">
        <div>
          <div className="card p-2 mx-auto w-50">
            <div className="d-flex align-items-center">
              <div className="image">
                <img
                  src={photo}
                  className="rounded"
                  alt="imageProfile"
                  width="250"
                />
              </div>
              <div className="mx-3 w-100">
                <h3 className="mb-2 mt-0 text-uppercase">
                  {this.state.person.fullName}
                </h3>
                <h6 className="mb-4">{this.state.person.profession}</h6>
                <p>{this.state.person.bio}</p>
              </div>
            </div>
          </div>
          <br />
          <h6 className="text-center">{this.state.timer}</h6>
        </div>
      </div>
    );
  }
}

export default Person;
