function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      value={value ?? ""}
      onChange={onChange}
    />
  );
}
 
export default Input;