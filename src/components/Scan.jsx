import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

const Scan = () => {
	const [scanResult, setScanResult] = useState(null);
	const [isCleared, setIsCleared] = useState(false);
	// const onNewScanResult = (decodedText, decodedResult) => {
	//     // handle decoded results here
	// };
	var html5QrcodeScanner;
	useEffect(() => {
		function onScanSuccess(decodedResult) {
			// handle the scanned code as you like, for example:
			html5QrcodeScanner.clear();
			setScanResult(decodedResult);
			setIsCleared(true);

			// setTimeout(() => {
			// 	setScanResult("");
			// }, 2000);
		}

		/* 	function onScanFailure(error) {
				// handle scan failure, usually better to ignore and keep scanning.
				// for example:
				if (error) console.log(error);
			} */
		html5QrcodeScanner = new Html5QrcodeScanner(
			"reader",
			{
				fps: 20,
				qrbox: {
					width: 150,
					height: 150,
				},
				aspectRatio: 1.0,
				useBarCodeDetectorIfSupported: true,
			},
			false
		);
		if (!isCleared) html5QrcodeScanner.render((e) => onScanSuccess(e));

		return () => {
			html5QrcodeScanner.clear().catch((error) => {
				console.error("Failed to clear html5QrcodeScanner. ", error);
				setIsCleared(false);
			});
		};
	}, []);
	return (
		<div className="scan">
			{scanResult ? (
				<div>
					<h3>QR Code lido:</h3>
					<a href={scanResult}>{scanResult}</a>
				</div>
			) : (
				<div id="reader"></div>
			)}
		</div>
	);
};

export default Scan;
