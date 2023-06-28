import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

const Scan = () => {
	const [scanResult, setScanResult] = useState(null);
	console.log(scanResult);

	// const onNewScanResult = (decodedText, decodedResult) => {
	//     // handle decoded results here
	// };

	useEffect(() => {
		const scanner = new Html5QrcodeScanner("reader", {
			qrbox: {
				width: 120,
				height: 100,
			},
			fps: 5,
			aspectRatio: 1.333334,
		});

		let isScanning = true;

		scanner.render(success, error);

		function success(result) {
			if (isScanning) {
				scanner.clear();
				setScanResult(result);
				isScanning= false;
			}
		}
		function error(err) {
			return console.error(err);
		}
		// cleanup function when component will unmount
		return () => {
			scanner.clear().catch((error) => {
				console.error("Failed to clear html5QrcodeScanner. ", error);
			});
		};
	}, []);
	return (
		<div className="scan">
			{scanResult ? (
				<div>
					<h3>QR Code lido:</h3>
					<a href={scanResult} target="_self" rel="noopener">
						{scanResult}
					</a>
				</div>
			) : (
				<div id="reader"></div>
			)}
		</div>
	);
};

export default Scan;
