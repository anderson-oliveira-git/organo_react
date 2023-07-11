import './Banner.css';

export const Banner = props => {
  return (
    <header className='banner'>
      <img src={props.path} alt={props.description} />
    </header>
  );
}