import CAB from "../img/CAB.webp";
import CAB02 from "../img/CAB02.mp4";
import "../pages/CABIAMENTO.css";
function CABIAMENTO(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <p id="p" >{props.descrição01}</p>
      <video className="ponto" src={CAB02} controls poster={CAB}></video>
    </div>
  );
}
export default CABIAMENTO;