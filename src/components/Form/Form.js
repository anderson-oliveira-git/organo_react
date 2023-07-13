import { useState } from 'react';
import { Button } from '../Button/Button';
import InputText from '../InputText';
import Select from '../Select';
import './Form.css';

export const Form = props => {
  const [nome, setNome]     = useState('');
  const [cargo, setCargo]   = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime]     = useState('');

  const saveForm = event => {
    event.preventDefault();
    props.colaboradorCadastro({
      nome, cargo, imagem, time
    });

    limparCampos();
  }

  function limparCampos () {
    setNome('');
    setCargo('');
    setImagem('');
  }

  return (
    <section className='form-container'>
      <form action={props.route} method={props.method} onSubmit={saveForm}>
        <h4> - Preencha os dados para cadastrar um colaborador! - </h4>
        <InputText 
          value={nome} 
          required={true} 
          label="Nome" 
          placeholder="Digite o nome"
          formValue={value => setNome(value)}
        />
        <InputText 
          value={cargo} 
          required={true} 
          label="Cargo" 
          placeholder="Digite o cargo"
          formValue={value => setCargo(value)}
        />
        <InputText 
          value={imagem} 
          required={true} 
          label="Imagem" 
          placeholder="Nome do usuário github"
          formValue={value => setImagem(value)}
        />

        <Select
          value={time}
          label="Time" 
          itens={props.times}
          default="Selecione o cargo"
          name="cargo"
          id="cargo"
          selectValue={valor => setTime(valor)}
        />
        
        <div className='btn-container'>
          <button className="btn-clear" type="button" onClick={limparCampos}>
            <i className='ti ti-eraser'></i>&nbsp;
            Limpar Campos
          </button>
          <Button label='Criar card' type='submit'/>
        </div>
      </form>
    </section>
  );
}