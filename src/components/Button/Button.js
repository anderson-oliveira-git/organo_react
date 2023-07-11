import './Button.css';

export const Button = props => {
  return (
    <div className='btn-container'>
      <button type={props.type}>{props.label}</button>
    </div>
  );
}