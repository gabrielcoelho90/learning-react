import Section from "./Section";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <>
      <Section id={'core-concepts'} title={'Core Concepts'}>
        <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        </ul>
      </Section>
    </>
  );
}
