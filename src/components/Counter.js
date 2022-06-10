export default function Counter({
  decreaseQuantity,
  increaseQuantity,
  changeInputQuantity,
  inputValue,
}) {
  return (
    <div className="form">
      <button className="decrement" onClick={(e) => decreaseQuantity(e)}>
        -
      </button>
      <input
        type="number"
        min="1"
        value={inputValue}
        placeholder="1"
        onChange={(e) => changeInputQuantity(e)}
      />
      <button className="increment" onClick={(e) => increaseQuantity(e)}>
        +
      </button>
    </div>
  );
}
