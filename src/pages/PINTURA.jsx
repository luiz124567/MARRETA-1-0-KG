import "../pages/PINTURA.css";
import MARRETA_PINTADA from "../img/MARRETA_PINTADA.webp";
import PINTANDO from "../img/PINTANDO.mp4";
function ACABAMENTO(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <video src={PINTANDO} poster={MARRETA_PINTADA} controls></video>
    </div>
  );
}
export default ACABAMENTO;