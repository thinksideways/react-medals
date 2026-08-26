function Medal(props) {
    const medalTypes = {
        gold: { name: "Gold Medal", emoji: "🥇" },
        silver: { name: "Silver Medal", emoji: "🥈" },
        bronze: { name: "Bronze Medal", emoji: "🥉" }
    }

    return (
        <div className="medal">
            {medalTypes[props.name].name + " " + medalTypes[props.name].emoji}
            {/*<button
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
			</button>*/}
        </div>
    )   
}

export default Medal;