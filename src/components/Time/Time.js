import { CardColaborador } from '../CardColaborador/CardColaborador';
import './Time.css';

export const Time = props => {
  const css = {backgroundColor: props.corPrimaria};
  console.log(props.colaboradores);
  return (
    <section className='time-container' style={css}>
      <h2> {props.title} </h2>

      <div className='colaboradores'>
        <CardColaborador headerColor={props.corSecundaria}/>
        <CardColaborador headerColor={props.corSecundaria}/>
        <CardColaborador headerColor={props.corSecundaria}/>
        <CardColaborador headerColor={props.corSecundaria}/>
        <CardColaborador headerColor={props.corSecundaria}/>
      </div>
    </section>
  );
}