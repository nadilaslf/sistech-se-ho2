import { Card } from "../Card";
import type { CardProps } from "../Card";

type FeatureProps = {
  featureItems: CardProps[];
};

function Feature({ featureItems }: FeatureProps) {
  return (
    <section id="feature" className="page-center pt-0">
      <h2 className="flex items-center text-3xl relative font-bold w-fit mb-8">Pilih kelas yang sesuai sama kebutuhanmu</h2>
      <div className="grid gap-8 md:grid-cols-3 mt-8">
        {featureItems.map((item, index) => (
          <Card
            key={index}
            banner={item.banner}
            title={item.title}
            description={item.description}
            lecturers={item.lecturers}
            alt={item.alt}
            onClick={item.onClick}
            onSecondaryClick={item.onSecondaryClick}
            featureName={item.featureName}
            details={item.details}
            topics={item.topics} 
            height={500}          
            />
        ))}
      </div>
    </section>
  );
}

export { Feature };