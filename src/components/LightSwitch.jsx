import "../stylesheets/LightSwitch.css";

function LightSwitch({ switchLights, text, className }) {
	return (
		<button className={className} onClick={() => switchLights()}>
			{text}
		</button>
	);
}

export default LightSwitch;
