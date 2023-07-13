import './CardColaborador.css';

export const CardColaborador = props => {
  return (
    <div className='card-container'>
      <div className='card-image' style={{background: props.headerColor}}>
        <img src={"https://github.com/" + props.imagem + ".png"} alt="foto do colaborador" />
      </div>
      <div className='card-infos'> 
        <span>
          <h4>{props.nome}</h4>
          <h5>{props.cargo}</h5>
        </span>
      </div>
    </div>
  );
}