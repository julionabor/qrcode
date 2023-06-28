import { QRCodeSVG } from "qrcode.react";
import QRCodeLink from "qrcode";
import { useEffect, useState } from "react";

const Generate = () => {
	const [link, setLink] = useState("");
	const [size, setSize] = useState(100);
	const [bgcolor, setBgcolor] = useState("#ffffff");
	const [fgcolor, setFgcolor] = useState("#1b1b1b");
	const [qrcodeLink, setQrcodeLink] = useState("");
	const [showQRCode, setShowQRCode] = useState(false);

	useEffect(()=> {
		generateQR(link,size,bgcolor,fgcolor)
	},[link,size,bgcolor,fgcolor])

	const generateQR = (link_url, size, bgcolor, fgcolor) => {
		QRCodeLink.toDataURL(
			link_url,
			{
				width: size,
				margin: 1,
				color: {
					dark: fgcolor,
					light: bgcolor,
				},
			},
			(err, url) => {
				if (err) return console.log(err);
				setQrcodeLink(url);
			}
		);
		setShowQRCode(true);
	};
	const handleGenerate = () => {
		console.log(link, size, bgcolor, fgcolor);

		if (!link || !size || !bgcolor || !fgcolor)
			return alert("Todos campos devem estar preenchidos");
		generateQR(link, size, bgcolor, fgcolor);
	};
	return (
		<div id="gerarQRCode">
			<label>Insira o link que pretende transformar em QRCode. 
			<input
				type="text"
				placeholder="Ex: http://www.google.pt"
				onChange={(e) => setLink(e.target.value)}
			/>
			</label>
			<div className="opcoes">
				<label>
					Dimensões:
					<select
						className="tamanhoOpcoes"
						defaultValue="100"
						placeholder="Selecione o Tamanho:"
						onChange={(e) => setSize(e.target.value)}
					>
						<option value="100">100x100</option>
						<option value="150">150x150</option>
						<option value="200">200x200</option>
					</select>
				</label>
				<label>
					Cor do Fundo:
					<input
						type="color"
						id="BGColor"
						value={bgcolor}
						onChange={(e) => setBgcolor(e.target.value)}
						className="color-inp"
					/>
				</label>
				<label>
					Cor das Linhas:
					<input
						type="color"
						id="FGColor"
						value={fgcolor}
						onChange={(e) => setFgcolor(e.target.value)}
						className="color-inp"
					/>
				</label>
			</div>
			<div className="box">
				<button id="submit" onClick={handleGenerate}>
					Gerar
				</button>
				{qrcodeLink && (
					<a href={qrcodeLink} download="qrcode.png">
						Download
					</a>
				)}

				{/* <a href={qrcodeLink} id="download" download={`qrcode.png`}>
							Download
						</a> */}
			</div>
			<div className="container">
				{!!showQRCode && (
					<QRCodeSVG
						value={link}
						size={size || 100}
						bgColor={bgcolor}
						fgColor={fgcolor}
						level={"H"}
						includeMargin={false}
					/>
				)}
			</div>
		</div>
	);
};

export default Generate;
