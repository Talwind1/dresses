function Input({ type, handleChange, objVal }) {
  return (
    <input
      className="input"
      type="text"
      onChange={handleChange}
      name={type}
      placeholder={type}
      //  value={objVal}
      id={type}
    />
  );
}
export default Input;
