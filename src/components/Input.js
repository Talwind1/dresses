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
      className="itn"
    />
  );
}
export default Input;
