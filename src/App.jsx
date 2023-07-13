import { useState } from "react";
import "./App.css";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import FlipIcon from "@mui/icons-material/Flip";

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
					<div onClick={() => setShowGenerate(!showGenerate)}>
						<h1>
							<QrCodeScannerIcon /> Gerar QRCode
						</h1>
						<img src={imgGenerate} alt="Gerar QR Code" />

						{showGenerate && <Generate />}
					</div>
					<div onClick={() => setShowScan(!showScan)}>
						<h1>
							{" "}
							<FlipIcon /> Ler QRCode
						</h1>
						<img src={imgScanQR} alt="Gerar QR Code" />
						{showScan && <Scan />}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
