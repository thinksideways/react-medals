import Country from "./Country";

function Countries(props) {
    return (
        <>
            <ul className="countries">
                {props.selectedCountries.map((country) => 
                    <li key={country.code}>
                        <Country
                            name={country.name}
                            code={country.code}
                            goldMedals={country.goldMedals || 0}
							onUpdateMedals={props.onUpdateMedals}
							onDeleteCountry={props.onDeleteCountry}
                        />
                    </li>
                )}
            </ul>
        </>
    )
}

export default Countries;