function Input({ type, handleChange, value, inputRef }) {
  return (
    <input
      className="input"
      type="text"
      onChange={handleChange}
      name={type}
      placeholder={type}
      value={value}
      id={type}
      ref={inputRef}
    />
  );
}
export default Input;
