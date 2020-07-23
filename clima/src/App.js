import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Clima from './components/Clima';


function App() {

// states and destructuring

	const [data,handleData] = useState({
		ciudad: '',
		pais: ''
	})
	const {ciudad,pais} = data;
	const [validatedForm, handleValidatedForm] = useState(false);
	const [result, handleResult] = useState({});
	const [errorApi, handleErrorApi] = useState(false);
	const [clima, handleClima] = useState(false);

	
	useEffect( () => {
		
		
		const callApi = async() => {
			if(validatedForm){
				const apiId ='fa7276da105c52e463140e98b4cb4907';
				const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;
				const conexionApi = await fetch(url);
				const answer = await conexionApi.json();
				handleValidatedForm(false);
				handleResult(answer)
				if(answer.cod === '404'){
					handleErrorApi(true);
					handleClima(false);
				}else{
					handleErrorApi(false);
					handleClima(true);
				}
			}
		} 
		callApi();
	},[validatedForm,ciudad,pais])
	return (
		<Fragment>
			<Header
		  		title='Clima'
			/>
			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col m6 s12">
							<Form
								handleData={handleData}
								data={data}
								handleValidatedForm={handleValidatedForm}
								errorApi={errorApi}
							/>
						</div>
						<div className="col m6 s12">
							{
								clima
									?
										<Clima
											result={result}
										/>
									:
										null
							}
							
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
