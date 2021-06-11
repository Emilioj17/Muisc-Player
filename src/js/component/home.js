import { createRef, useState } from "react";
import React from "react";

export function Home() {
	const MULTIPLE_SOURCES = [
		{
			src:
				"https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3",
			id: 1,
			category: "game",
			name: "Mario Castle"
		},
		{
			src:
				"https://assets.breatheco.de/apis/sound/files/mario/songs/hurry-starman.mp3",
			id: 2,
			category: "game",
			name: "Mario Star"
		},
		{
			src:
				"https://assets.breatheco.de/apis/sound/files/mario/songs/overworld.mp3",
			id: 3,
			category: "game",
			name: "Mario Overworld"
		}
	];

	function AppFunc(props) {
		const [state, setState] = useState({
			url: "",
			muted: false,
			tocandoPrimera: "",
			tocandoSegunda: "",
			tocandoTercera: "",
			nombre: "Play"
		});

		let input = createRef();

		return (
			<div className="container">
				<div
					className="row"
					style={{
						height: "40vh"
					}}>
					<div
						className={`col-md-12 d-flex align-items-center border border-danger my-2 ${state.tocandoPrimera}`}
						ref={t => (input = t)}
						onClick={e =>
							setState({
								url: MULTIPLE_SOURCES[0].src,
								nombre: "Pause",
								tocandoPrimera: "bg-warning",
								tocandoSegunda: "",
								tocandoTercera: ""
							})
						}>
						Cancion 1: Castle
					</div>
					<div
						className={`col-md-12 d-flex align-items-center border border-danger my-2 ${state.tocandoSegunda}`}
						ref={t => (input = t)}
						onClick={e =>
							setState({
								url: MULTIPLE_SOURCES[1].src,
								nombre: "Pause",
								tocandoPrimera: "",
								tocandoSegunda: "bg-warning",
								tocandoTercera: ""
							})
						}>
						Cancion 2: Hurry Starman
					</div>
					<div
						className={`col-md-12 d-flex align-items-center border border-danger my-2 ${state.tocandoTercera}`}
						ref={t => (input = t)}
						onClick={e =>
							setState({
								url: MULTIPLE_SOURCES[2].src,
								nombre: "Pause",
								tocandoPrimera: "",
								tocandoSegunda: "",
								tocandoTercera: "bg-warning"
							})
						}>
						Cancion 3: Overworld
					</div>
					<div className="col-md-12"></div>
				</div>
				<div className="row d-flex justify-content-center footer bg-dark">
					<button
						type="button"
						className="btn btn-primary mx-2"
						ref={t => (input = t)}
						onClick={e => {
							if (state.url == MULTIPLE_SOURCES[0].src) {
								setState({
									url: MULTIPLE_SOURCES[2].src,
									nombre: "Play",
									muted: true
								});
							} else if (state.url == MULTIPLE_SOURCES[1].src) {
								setState({
									url: MULTIPLE_SOURCES[0].src,
									nombre: "Play",
									muted: true
								});
							} else if (state.url == MULTIPLE_SOURCES[2].src) {
								setState({
									url: MULTIPLE_SOURCES[1].src,
									nombre: "Play",
									muted: true
								});
							}
						}}>
						Atras
					</button>
					<button
						type="button"
						className="btn btn-primary mx-2"
						ref={t => (input = t)}
						onClick={e =>
							state.nombre == "Pause"
								? setState({
										url: "",
										nombre: "Play",
										muted: true
								  })
								: setState({
										url: MULTIPLE_SOURCES[1].src,
										nombre: "Pause",
										muted: false
								  })
						}>
						{state.nombre}
					</button>
					<button
						type="button"
						className="btn btn-primary mx-2"
						ref={t => (input = t)}
						onClick={e => {
							if (state.url == MULTIPLE_SOURCES[0].src) {
								setState({
									url: MULTIPLE_SOURCES[1].src,
									nombre: "Pause",
									muted: true
								});
							} else if (state.url == MULTIPLE_SOURCES[1].src) {
								setState({
									url: MULTIPLE_SOURCES[2].src,
									nombre: "Pause",
									muted: true
								});
							} else if (state.url == MULTIPLE_SOURCES[2].src) {
								setState({
									url: MULTIPLE_SOURCES[0].src,
									nombre: "Pause",
									muted: true
								});
							}
						}}>
						Adelante
					</button>
				</div>
				<audio src={state.url} autoPlay />
			</div>
		);
	}

	return (
		<div
			className="bg-secondary"
			style={{
				width: "100vw",
				height: "100vh"
			}}>
			<div
				className="text-center header bg-dark py-3"
				style={{
					width: "100vw",
					height: "15vh"
				}}>
				<h1 className="display-4">Musica para tus oidos</h1>
			</div>
			<div
				className="body"
				style={{
					width: "100vw",
					height: "60vh"
				}}>
				<AppFunc />
			</div>
		</div>
	);
}
