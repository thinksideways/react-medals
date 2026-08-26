import { useState } from 'react'
import CountrySelector from './CountrySelector'
import countryFlags from 'country-flags';
import Medal from './Medal';

function Country(props) {
	let medals = {
		gold: { quantity: 0 },
		silver: { quantity: 0 },
		bronze: { quantity: 0 }
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
					{countryFlags[props.code]?.flag} {props.name} gold medals (assignment 2): {props.goldMedals}
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
						<Medal name="gold" />
						<Medal name="silver" />
						<Medal name="bronze" />
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default Country
