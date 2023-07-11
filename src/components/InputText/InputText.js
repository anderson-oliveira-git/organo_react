import './InputText.css';

export const InputText = props => {
  return (
    <div className="input-text">
      <label htmlFor={props.id}>{props.label}</label>
      <input 
        type={props.type} 
        id={props.id} 
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
}
