import './Button.css';

export const Button = props => {
  return (
    <div className='btn-container'>
      <button className='btn-criar' type={props.type}>
        <i className='ti ti-plus'></i>&nbsp;
        {props.label}
      </button>
    </div>
  );
}