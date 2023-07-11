import { Button } from '../Button/Button';
import InputText from '../InputText';
import { Select } from '../Select/Select';
import './Form.css';

export const Form = props => {
  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e gestão'
  ];

  return (
    <section className='form-container'>
      <form action={props.route} method={props.method}>
        <h4>Preencha os dados para cadastrar um colaborador!</h4>
        <InputText label="Nome" placeholder="Digite o nome"/>
        <InputText label="Cargo" placeholder="Digite o cargo"/>
        <InputText label="Imagem" placeholder="Digite o caminho"/>
        <Select 
          label="Time" 
          itens={times}
          default="Selecione o cargo"
          name="cargo"
          id="cargo"
        />

        <Button label='Criar card' type='submit'/>
      </form>
    </section>
  );
}