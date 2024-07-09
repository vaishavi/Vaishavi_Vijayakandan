import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./ParticleConfig";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<Particles
			options={particlesConfig}
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
            particlesInit={particlesInit}
		/>
	);
}