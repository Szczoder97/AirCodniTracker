import OptionList from "./OptionList";
import Map from "./Map";
import { Component } from "react";

class Content extends Component {
  handleOptionChange = (option) => {
    this.props.handleOptionChange(option)
  }

  render() {
    return (
      <div className="row">
        <Map position={this.props.position} zoom={11} option={this.props.option} />
        <OptionList handleOptionChange={this.handleOptionChange} />
      </div>
    );
  }
}

export default Content;
