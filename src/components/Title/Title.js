import './Title.css';

export const Title = props => {
  return (
    <div className='title-container'>
      <h1>{props.title}</h1>
    </div>
  );
}