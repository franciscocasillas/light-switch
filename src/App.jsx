import { useState } from "react";
import "./App.css";
import LightSwitch from "./components/LightSwitch";

function App() {
	const [isOn, setIsOn] = useState(false);
	const handleSwitchLights = () => {
		setIsOn(!isOn);
	};

	return (
		<LightSwitch
			switchLights={handleSwitchLights}
			text={isOn ? "Turn off" : "Turn on"}
			className={isOn ? "on" : "off"}
		/>
	);
}

export default App;
