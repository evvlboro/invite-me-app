const TestComponent = () => {
  const name = 'John'

  return (
    <div className="m-2 bg-red-500 p-4">
      <h1 className="text-2xl font-bold">Test Component</h1>
      <p>Name: {name}</p>
      <p className="text-blue-500" /* лишние пробелы и классы вразнобой */>
        Some text with weird formatting
      </p>
    </div>
  )
}

export default TestComponent
