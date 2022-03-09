import { Section } from './Careers.styled';
import interactive_sm from '../../img/desktop/image-interactive.jpg';
import interactive_lg from '../../img/desktop/image-interactive.jpg';

export default function Careers() {
  return (
    <Section id="careers">
      <img
        src={interactive_sm}
        srcSet={`${interactive_lg} 768w`}
        alt="interactive"
      />
      <section>
        <h1>the leader in interactive vr</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </section>
    </Section>
  );
}
