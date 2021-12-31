import { Component } from "react"
import "../style/Option.css"

class Option extends Component {
    onOptionChange = () => {
        this.props.handleOptionChange(this.props.optionKey)
    }

    render() {
        return(
                <button type="button" onClick={this.onOptionChange} className="btn btn-success btn-lg option-button">{this.props.optionKey}</button>
        )
    }
}

export default Option 