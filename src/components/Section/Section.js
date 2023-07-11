import './Section.css';

export const Section = props => {
  return (
    <section className="section-container">
      <h4>{props.title}</h4>
    </section>
  );
}
