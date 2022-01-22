import Option from "./Option";
import { Component } from "react";
import "../style/OptionList.css";

class OptionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        "PM 2.5": "usepa-pm25",
        "PM 10": "usepa-10",
        "Ozone": "usepa-o3",
        "Nitrogen Dioxide": "usepa-no2",
        "Sulfur Dioxide": "usepa-so2",
        "Carbon Monoxide": "usepa-co",
      },
    };
  }

  handleOptionChange = (optionKey) => {
    this.props.handleOptionChange(this.state.options[optionKey]);
  };

  render() {
    return (
      <div className="btn-group-vertical col-sm-6 col-md-3 mt-3 mt-md-0 mx-auto option-list">
        {Object.keys(this.state.options).map((key, index) => {
          return (
            <Option
              key={index}
              optionKey={key}
              handleOptionChange={(optionKey) => {
                this.handleOptionChange(optionKey);
              }}
            ></Option>
          );
        })}
      </div>
    );
  }
}

export default OptionList;
