import PECAFINAL from "../img/PECAFINAL.webp";

function EXPEDIÇÃO(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <img className="pçs" src={PECAFINAL} />
      <p>{props.descrição01}</p>
      <p>{props.descrição02}</p>
    </div>
  );
}
export default EXPEDIÇÃO;
