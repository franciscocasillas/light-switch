function LightSwitch({ switchLights, text }) {
	return <button onClick={() => switchLights()}>{text}</button>;
}

export default LightSwitch;
