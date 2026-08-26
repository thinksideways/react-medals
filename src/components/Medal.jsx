function Medal(props) {
    const medalTypes = {
        gold: { name: "Gold Medal", emoji: "🥇" },
        silver: { name: "Silver Medal", emoji: "🥈" },
        bronze: { name: "Bronze Medal", emoji: "🥉" }
    }
	function addMedal() {
		props.onAddMedal(props.name);
	}
	function removeMedal() {
		props.onRemoveMedal(props.name);
	}
    return (
        <div className="medal">
            {medalTypes[props.name].name + " " + medalTypes[props.name].emoji}
            <button
			type="button"
			className="counter"
			onClick={() => addMedal(props)}
			>
			+
			</button>
			<span class="medalCount">{props.quantity}</span>
			<button
			type="button"
			className="counter"
			onClick={removeMedal}
			disabled={props.quantity <= 0}
			>
			-
			</button>
        </div>
    )   
}

export default Medal;