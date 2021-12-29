import OptionList from "./OptionList";
import Map from "./Map";

const Content = () => {
  return (
    <div className="row">
      <Map lat={54.43333} lng={18.55} zoom={10} option={"usepa-aqi"} />
      <OptionList />
    </div>
  );
};

export default Content;
