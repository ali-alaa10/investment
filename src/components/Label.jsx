export default function UserInput({
  labelName,
  InputType,
  inputId,
  value,
  onChange,
}) {
  return (
    <>
     
        <p>
          <label>{labelName}</label>
          <input
            type={InputType}
            required
            value={value}
            onChange={(e) => onChange(inputId, e.target.value)}
          />
        </p>
     
    </>
  );
}
