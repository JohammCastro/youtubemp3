import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Fab, Icon, ThemeProvider, createTheme } from "@mui/material"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material'
import axios from 'axios';


const VideosBusqueda = (props) => {
	const [videos, setVideos] = useState([])

	// console.log(videos[0].snippet.thumbnails);
	// let idVideo=videos[0].id.videoId;
	// let titulo=videos[0].snippet.title
	// let imagen = videos[0].snippet.thumbnails.default.url


	const descargarVideo=async(id)=>{
		console.log(id)
		// alert('qlq')
		const options = {
			method: 'GET',
			url: 'https://youtube-mp36.p.rapidapi.com/dl',
			params: { id: id },
			headers: {
				'X-RapidAPI-Key': '0f06cd1b56msh2bfad26e7d3cc83p1e4345jsn57406b41f1fd',
				'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
			}
		};
		const { data } = await axios.request(options)
	
		console.log(data);
		console.log(data.link);
		location.href =data.link;
	}


	useEffect(() => {
		setVideos(props.item);
	}, []);
	return (
		<>
			<div style={{ backgroundColor: '', marginTop: '20px', textAlign: 'center', padding: "50px" }}>
				<Grid container spacing={12}>
					{

						videos.map((item) => (


							<Grid item xs={12} md={4} style={{ width: '100%', backgroundColor: "" }}>
								<div style={{ backgroundColor: "", display: "table-cell" }}>
									<Card sx={{ maxWidth: 345, height: 350 }} style={{}}>
										<CardMedia
											sx={{ height: 140 }}
											image={item.snippet.thumbnails.high.url}
											title={item.snippet.title}
										/>
										<CardContent>
											{/* <Typography gutterBottom variant="h5" component="div">
											{item.snippet.title}
										</Typography> */}
											<Typography variant="body1" color="text.secondary">
												{item.snippet.title}
											</Typography>
										</CardContent>
										<div style={{ textAlign: 'center', verticalAlign: 'bottom' }}>

											<div style={{ textAlign: "center" }}>
												
												<Fab onClick={()=>descargarVideo(item.id.videoId)} color="secondary" variant="extended">
													<CloudDownloadIcon />
													<a style={{ marginLeft: '5px', textDecoration: "none", color: 'white' }}>DOWNLOAD</a>
												</Fab>
											</div>

										</div>
									</Card>
								</div>
							</Grid>

							// item.snippet.thumbnails.default.url
						))
					}
				</Grid>
			</div>

		</>
	);
};


export default VideosBusqueda;