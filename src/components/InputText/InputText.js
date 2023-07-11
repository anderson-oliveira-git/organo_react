import './InputText.css';

export const InputText = props => {
  const inputValue = event => {
    props.formValue(event.target.value);
  }

  return (
    <div className="input-text">
      <label htmlFor={props.id}>{props.label}</label>
      <input 
        required={props.required}
        type={props.type} 
        id={props.id} 
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={inputValue}
      />
    </div>
  );
}
