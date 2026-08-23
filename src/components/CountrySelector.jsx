import { useState } from 'react';
import countryFlags from 'country-flags';
import { useRef } from 'react';

function CountrySelector(props) {
    let countriesList = Object.entries(countryFlags).filter(([code, data]) => !data.name.includes("-"));
	const selectRef = useRef();

	function addCountry() {
		let code = selectRef.current.value;
		if (code) {
			props.onAddCountry(code);
			selectRef.current.value = "";
		}
	}

    return(
        <>
            <select ref={selectRef} id="countrySelector" onChange={(e) => console.log(e)}>
                <option value="">Select a country...</option>
                {countriesList.map(([code, data]) => 
                    <option key={code} value={code}>{data.flag} - {data.name}</option>
                )}
            </select>
			<button
				type="button"
				onClick={addCountry}>
				Add Country
			</button>
        </>
    )    
}

export default CountrySelector;