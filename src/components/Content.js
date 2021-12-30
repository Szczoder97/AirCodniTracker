import OptionList from "./OptionList";
import Map from "./Map";

const Content = ({position, option}) => {
  return (
    <div className="row">
      <Map position={position} zoom={11} option={"usepa-aqi"} />
      <OptionList />
    </div>
  );
};

export default Content;
