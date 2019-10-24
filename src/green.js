import { setLightsVar } from "./App";

function turnOnGreenLight(callback) {
  setLightsVar[1] = "active";
  callback();
}

export default turnOnGreenLight;