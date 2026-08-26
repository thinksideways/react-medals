import { useState } from 'react'
import CountrySelector from './CountrySelector'
import countryFlags from 'country-flags';
import Medal from './Medal';

function Country(props) {
	let medals = {
		gold: { quantity: 0, name: "gold" },
		silver: { quantity: 0, name: "silver" },
		bronze: { quantity: 0, name: "bronze"}
	}

	function addMedal() {
		let medals = props.goldMedals + 1;
		props.onUpdateMedals(props.code, medals);
	}

	function removeMedal() {
		if (props.goldMedals > 0) {
			let medals = props.goldMedals - 1;
			props.onUpdateMedals(props.code, medals);
		}
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
			<div className="assignmentVariantsCountry">
				<div className="country assignment2">
					<h5>Assignment 2 Variant: Increment Counter</h5>
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
					disabled={!props.goldMedals > 0}
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
				</div>
				<div className="country assignment3">
					<h5>Assignment 3 Variant: Create a Medal component</h5>
					{countryFlags[props.code]?.flag} {props.name}
					<div className="countryMedals">
						{Object.values(medals).map((medal) =>
							<Medal name={medal.name} />
						)}
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default Country
