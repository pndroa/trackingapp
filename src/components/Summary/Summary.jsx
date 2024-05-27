const Summary = () => {
  return (
    <div>
      Summary Page
      <button
        onClick={() => {
          alert("Add your breakfast")
        }}
      >
        Add Breakfast
      </button>
      <button
        onClick={() => {
          alert("Add your lunch")
        }}
      >
        Add lunch
      </button>
      <button
        onClick={() => {
          alert("Add your dinner")
        }}
      >
        Add dinner
      </button>
    </div>
  )
}

export default Summary
