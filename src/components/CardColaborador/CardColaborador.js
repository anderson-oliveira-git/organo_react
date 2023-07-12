import './CardColaborador.css';

export const CardColaborador = props => {
  return (
    <div className='card-container'>
      <div className='card-image'>
        <img src="https://github.com/anderson-oliveira-git.png" alt="foto do colaborador" />
      </div>
      <div className='card-infos'> 
        <span>
          <h4></h4>
          <h5>Desenvolvedor</h5>
        </span>
      </div>
    </div>
  );
}