import Modelo from "./pages/Moldelo";
import Moldação from "./pages/Moldação";
import Fusão from "./pages/Fusão";
import "./App.css";
import ESMERIL from "./pages/ESMERIL";
import PINTURA from "./pages/PINTURA";
import EXPEDIÇÃO from "./pages/EXPEDIÇÃO";
import CABIAMENTO from "./pages/CABIAMENTO";
function App() {
  return (
    <>
      <Modelo
        PODRUTO="MARRETA 1,0 KG"
        descrição01="QUANTIDADE DE FIGURA: 20."
        descrição02="CAMPANA: 76."
      />
      <Moldação
        PODRUTO="MOLDAÇÃO"
        descrição01="PROD./ HORA: 37."
        descrição02="PROD. DIÁRIA: 330."
        descrição03="PESO DO MOLDE: 21,140KG."
      />
      <Fusão
        PODRUTO="FUSÃO"
        descrição06="QTD DE MOLDES POR MONTE: 4."
        descrição07="FILTRO: NÃO USA"
        descrição08="MATERIAL ULTILIZADO:GGG40"
        descrição01="TRAVAMENTO COM GRADE."
        descrição02="TEMPERATURA DE VAZAMENTO : 1320ºC á 1360ºC."
      />
      <ESMERIL
        PODRUTO="ESMERIL"
      />
      <PINTURA PODRUTO="PINTURA" />
      <CABIAMENTO PODRUTO="CABIAMENTO"/>
      <EXPEDIÇÃO
        PODRUTO="EXPEDIÇÃO"
      />
    </>
  );
}

export default App;
