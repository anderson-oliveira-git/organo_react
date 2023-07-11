import './Select.css';

export const Select = props  => {

  return (
    <div className='field-select'>
      <label htmlFor={props.id}>{props.label}</label>
      <select 
        name={props.name} 
        id={props.id} 
        defaultValue={props.default} 
        value={props.valor}
        onChange={evento => props.selectValue(evento.target.value)}
      >
        <option value={props.default} disabled>{props.default}</option>

        {props.itens.map(item => {
          return <option key={item}>{item}</option>;
        })}
        
      </select> 
    </div>
  );
} 