import { useState } from "react"
import axios from 'axios'
import { Fab, Icon, ThemeProvider, Typography, createTheme } from "@mui/material"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { VideosBusqueda } from "./components";




const Dashboard = () => {
	const [idBusqueda, setIdBusqueda] = useState("")
	const [busquedaCompleta, setBusquedaCompleta] = useState(false)
	const [busquedaCompletaData, setBusquedaCompletaData] = useState({})
	
	const youtubeApiKey = "AIzaSyDqszCZLrC9qk1AMizXh1uZMAbq2xB9khk";
	const enterBuscar=(e)=>{
		if(e.key==='Enter'){buscar()}
	}
	const buscar = async () => {
		// alert('bsucar');
		setBusquedaCompleta(false)
		setBusquedaCompletaData({})
		// console.log(idBusqueda);

		//identificar si es una busqueda por id o una busqueda normal
		const tpbusqueda = idBusqueda.split('https://')
		console.log(tpbusqueda);
		let idVideo = ''
		let urlYT=''
		if (tpbusqueda.length > 1) {
			//es una url
			// alert('es una url')
			const watch = idBusqueda.split('watch?v=')
			idVideo = watch[1].split('&')[0]
			console.log(idVideo);
			let namebusqueda=idVideo;
			urlYT=`https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=1&q=${namebusqueda}&type=video&key=${youtubeApiKey}`;
		} else {
			//busqueda normal
			// alert('busqueda normal')
			console.log(idBusqueda);
			// let token='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'
			let namebusqueda=idBusqueda;
			urlYT=`https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=6&q=${namebusqueda}&type=video&key=${youtubeApiKey}`;
			// https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=C-Blr4SWOr4&key=AIzaSyDqszCZLrC9qk1AMizXh1uZMAbq2xB9khk

			

		}

		const options = {
			method: 'GET',
			url: urlYT,
		};
		const { data } = await axios.request(options)
		console.log(busquedaCompleta)
		console.log(data.items);
		setBusquedaCompleta(true)
		console.log(busquedaCompleta)
		setBusquedaCompletaData(data.items)


		

	}
	const theme = createTheme({
		typography: {
			// fontFamily: '-apple-system'

		},
		palette: {
			mode: "light",
			background: {
				default: "red"
			},
			secondary: {
				main: "#ff0000"
			},

		}
	});
	return (
		<>

			<ThemeProvider theme={theme}>
				<div style={{ backgroundColor: '', textAlign: 'center', paddingTop: "20px" }}>
					<Typography variant="h2" component="h2" color="secondary">
						YouTube MP3
					</Typography>
				</div>


				<br />

				<div style={{ backgroundColor: 'blue', textAlign: 'center' }}>


					<input value={idBusqueda} onKeyDown={e=>enterBuscar(e)} onChange={e => setIdBusqueda(e.target.value)} placeholder="YOUTUBE MP3" style={{ height: '40px', border: '2px solid red', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }} />


					<button onClick={buscar} style={{ height: '46px', border: '2px solid red', borderLeft: 'none', borderTopRightRadius: "5px", borderBottomRightRadius: "5px", backgroundColor: 'red', color: 'white' }} >Buscar</button>


				</div>

				<br />



				{busquedaCompleta ?
					<VideosBusqueda item={busquedaCompletaData}/>
					:
					console.log('sin link')}
			</ThemeProvider>
		</>
	)
}


export default Dashboard;