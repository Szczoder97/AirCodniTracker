import "../style/Option.css"

const Option = (props) => {
    return(
            <button type="button" className="btn btn-success btn-lg option-button">{props.option}</button>
    );
};

export default Option 