import { CardColaborador } from '../CardColaborador/CardColaborador';
import './Time.css';

export const Time = props => {
  const css = {backgroundColor: props.corPrimaria};
  
  return (
    <section className='time-container' style={css}>
      <h4> - {props.title} - </h4>

      <div className='colaboradores'>

      </div>
    </section>
  );
}