import { useState } from "react";

import './App.css';

import CountrySelector from './components/CountrySelector';
import Countries from './components/Countries';

import countryFlags from 'country-flags';

function App() {
    const [countries, setCountries] = useState([
		{code:"US", name: "United States"},
		{code:"CN", name: "China"},
		{code: "RU", name: "Russia"}
	]);

	function handleUpdateMedals(code, medals) {
		setCountries(
			countries.map(
				country => {
					if (country.code === code) {
						return {...country, goldMedals: medals};
					}
					return country;
				}
			)
		)
	}

	function handleAddCountry(code) {
		setCountries(
			[...countries, {code: code, name: countryFlags[code]?.name, goldMedals: 0}]
		)
	}

	function handleDeleteCountry(code) {
		setCountries(
			countries.filter(
				country => {
					if (country.code !== code) {
						return country;
					}
				}
			)
		)
	}

	return (
      <>
        <CountrySelector
			selectedCountries={countries}
			onAddCountry={handleAddCountry}
		/>

        <Countries
			selectedCountries={countries}
			onUpdateMedals={handleUpdateMedals}
			onDeleteCountry={handleDeleteCountry}
		 />
      </>
    )
}

export default App
