import { useState } from "react";
import "./App.css";

import imgGenerate from "./assets/generate.png";
import imgScanQR from "./assets/scan.svg";
import Scan from "./components/Scan";
import Generate from "./components/Generate";

function App() {
	const [showScan, setShowScan] = useState(false);
	const [showGenerate, setShowGenerate] = useState(false);


	return (
		<>
			<div>
				<div className="wrapper">
					<h1>Gerar QRCode</h1>
					<img
						src={imgGenerate}
						alt="Gerar QR Code"
						onClick={() => setShowGenerate(!showGenerate)}
					/>

					{showGenerate && <Generate />}
					<h1>Ler QRCode</h1>
					<img
						src={imgScanQR}
						alt="Gerar QR Code"
						onClick={() => setShowScan(!showScan)}
					/>
					{showScan && <Scan />}
				</div>
			</div>
		</>
	);
}

export default App;
