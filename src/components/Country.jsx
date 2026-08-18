import { useState } from 'react'

function Country() {
  const [gold, setGold] = useState(0)
  const [name, setName] = useState("United States")

  function handleClick() {
    setGold((gold) => gold + 1)
  }

  return (
    <>
      <section id="country">
        {name} gold medals: {gold}
        <button
          type="button"
          className="counter"
          onClick={handleClick}
        >
          Add medal
        </button>
      </section>
    </>
  )
}

export default Country
