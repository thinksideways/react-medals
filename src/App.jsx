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

	const [countryMedals, setCountryMedals] = useState(
		[
			{code:"US", goldMedals: 0, silverMedals: 0, bronzeMedals: 0},
			{code:"CN", goldMedals: 0, silverMedals: 0, bronzeMedals: 0},
			{code:"RU", goldMedals: 0, silverMedals: 0, bronzeMedals: 0}
		]
	)

	const [totalMedals, setTotalMedals] = useState([]);

	function handleUpdateMedals(code, medals) {
		if (typeof medals === "number") { // original assignment flow, just adding goldMedals
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
		} else { // new flow, tally all medals of varying types
			setCountryMedals(
				countryMedals.map(
					country => {
						if (country.code === code) {
							return {
								...country,
								goldMedals: medals.gold.quantity,
								silverMedals: medals.silver.quantity,
								bronzeMedals: medals.bronze.quantity
							};
						}
						return country;
					}
				)
			)
		}
	}

	function handleAddCountry(code, medals = null) {
		setCountries(
			[...countries, {code: code, name: countryFlags[code]?.name, goldMedals: 0}]
		)

		setCountryMedals(
			[...countryMedals, {code: code, name: countryFlags[code]?.name, goldMedals: 0, silverMedals: 0, bronzeMedals: 0}]
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
		setCountryMedals(
			countryMedals.filter(
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
		<div className="topRow">
			<div className="countrySelector">
				<CountrySelector
					selectedCountries={countries}
					onAddCountry={handleAddCountry}
				/>
			</div>
			<div className="medalTally">
				<span>
					🌎 Medals: {countryMedals.reduce(
						(total, country) =>
							total
							+ country.goldMedals
							+ country.silverMedals
							+ country.bronzeMedals, 0
						)
					}
				</span>
				<span>
					🌎🥇: {countryMedals.reduce(
						(total, country) =>
							total
							+ country.goldMedals, 0
						)
					}
				</span>
				<span>
					🌎🥈: {countryMedals.reduce(
						(total, country) =>
							total
							+ country.silverMedals,0
						)
					}
				</span>
				<span>
					🌎🥉: {countryMedals.reduce(
						(total, country) =>
							total
							+ country.bronzeMedals, 0
						)
					}
				</span>
			</div>
		</div>
        <Countries
			selectedCountries={countries}
			onUpdateMedals={handleUpdateMedals}
			onDeleteCountry={handleDeleteCountry}
		 />
      </>
    )
}

export default App
