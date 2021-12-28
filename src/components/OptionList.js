import Option from "./Option";
import "../style/OptionList.css"

const OptionList = () =>{
    const options = [
        'PM 2.5', 'PM 10', 'Ozone', 'Nitrogen Dioxide', 'SulfurDioxide', 'Carbon Monoxide'
    ];
    return(
        <div className="btn-group-vertical col-3 option-list">
            {options.map(function(option, index){
                return <Option key={index} option = {option}></Option>
            })}
        </div>
    );
};

export default OptionList;