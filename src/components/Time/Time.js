import { CardColaborador } from '../CardColaborador/CardColaborador';
import './Time.css';

export const Time = props => {
  const css = {backgroundColor: props.corPrimaria};
  return (
    (props.colaboradores.length > 0) && <section className='time-container' style={css}>
      <h2> {props.title} </h2>

      <div className='colaboradores'>
        {props.colaboradores.map(colaborador => {
          return (
            <CardColaborador 
              key = {colaborador.nome}
              nome = {colaborador.nome}
              cargo = {colaborador.cargo}
              imagem = {colaborador.imagem}
              headerColor = {props.corSecundaria}
            />
          );
        })}
      </div>
    </section>
  );
}