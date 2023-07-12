import './Footer.css';

export const Footer = props => {
  return (
    <footer className='page-footer'>
      <div className='icones'>
        <a href={props.linkedin} target='_blank' rel='noreferrer'>
          <i className='ti ti-brand-linkedin'></i>
        </a>
        
        <a href={props.github} target='_blank' rel='noreferrer'>
          <i className='ti ti-brand-github'></i>
        </a>
      </div>

      <div className='logo'>
        <img src={props.logo} alt="logo da organo"/>
      </div>

      <div className='text'>
        {props.text}
      </div>
    </footer>
  );
}