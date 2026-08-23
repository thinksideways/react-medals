import { useState } from 'react'
import CountrySelector from './CountrySelector'
import countryFlags from 'country-flags';

function Country(props) {
	function addMedal() {
		let medals = props.goldMedals + 1;
		props.onUpdateMedals(props.code, medals);
	}

	function removeMedal() {
		let medals = props.goldMedals - 1;
		props.onUpdateMedals(props.code, medals);
	}

	function removeCountry() {
		props.onDeleteCountry(props.code);
	}

	function updateCurrentCountry(e) {
		console.log(e.target.value);
	}

	return (
		<>
		<section id="country">
			{countryFlags[props.code]?.flag} {props.name} gold medals: {props.goldMedals}
			<button
			type="button"
			className="counter"
			onClick={addMedal}
			>
			Add medal
			</button>
			<button
			type="button"
			className="counter"
			onClick={removeMedal}
			>
			Remove medal
			</button>
			<button
			type="button"
			className="counter"
			onClick={removeCountry}
			>
			Remove Country
			</button>
		</section>
		</>
	)
}

export default Country
