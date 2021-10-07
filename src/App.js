import logo from './logo.svg';
import './App.css';
import React from 'react';
// import photo from '../src/1.png'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Fullname: "Dellai Mohamed Ali",
      Bio: "Mind your own bio",
      Profession: "student",
   
      show: true,
      counter:0
    }

  }
  componentDidMount() {
    console.log("state did mount");
    setInterval(() => {

      this.setState({
        counter: this.state.counter + 1
      })
      console.log(this.state.counter)
    }, 1000);

  }

  componentWillUnmount() {
    alert(`The state lasted ${this.state.counter} seconds !`)
  }


  render() {
    return (
      <div className="info">
        {(this.state.show) ? (<>
          <h3> {this.state.Fullname} </h3>
          <h3> {this.state.Bio} </h3>
          <h3> {this.state.Profession} </h3>
          <img src={this.state.imgsrc} />
          <br />
        <button onClick={() => this.setState({ show: !this.state.show })}> Hide info </button>
        </>) : 
        <button onClick={() => this.setState({ show: !this.state.show })} > show info </button>
        }

      </div>

    )

  }
}

export default App;
