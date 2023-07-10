import './Banner.css';

function Banner (props) {
  return (
    <header className='banner'>
      <img src={props.path} alt={props.description} />
    </header>
  );
}

export default Banner;