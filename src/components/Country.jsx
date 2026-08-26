import { useState } from 'react'
import CountrySelector from './CountrySelector'
import countryFlags from 'country-flags';
import Medal from './Medal';

function Country(props) {
	const [medals, setMedals] = useState({
        gold: { quantity: 0, name: "gold" },
		silver: { quantity: 0, name: "silver" },
		bronze: { quantity: 0, name: "bronze" }
	});

	function addMedal(type = null) {
		if (type === null) {
			let medals = props.goldMedals + 1;
			props.onUpdateMedals(props.code, medals);
		} else {
			let updatedMedals = {...medals};
			updatedMedals[type].quantity += 1;
			setMedals(updatedMedals);
		}
	}

	function removeMedal(type = null) {
		if (type === null) {
			if (props.goldMedals > 0) {
				let medals = props.goldMedals - 1;
				props.onUpdateMedals(props.code, medals);
			}
		} else {
			let updatedMedals = {...medals};
			updatedMedals[type].quantity -= 1;
			setMedals(updatedMedals);
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
					onClick={() => addMedal()}
					>
					Add medal
					</button>
					<button
					type="button"
					className="counter"
					onClick={() => removeMedal()}
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
							<Medal 
								name={medal.name}
								quantity={medal.quantity}
								onAddMedal={addMedal}
								onRemoveMedal={removeMedal}
							/>
						)}
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default Country
