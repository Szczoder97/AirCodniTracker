import Option from "./Option";
import "../style/OptionList.css"

const OptionList = () =>{
    const options = [
        'PM 2.5', 'PM 10', 'Ozone', 'Nitrogen Dioxide', 'SulfurDioxide', 'Carbon Monoxide'
    ];
    return(
        <div className="btn-group-vertical col-sm-6 col-md-3 mt-3 mt-md-0 mx-auto option-list">
            {options.map(function(option, index){
                return <Option key={index} option = {option}></Option>
            })}
        </div>
    );
};

export default OptionList;