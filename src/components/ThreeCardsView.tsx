import carIcon from "../static/images/icon-sedans.svg";
import suvIcon from "../static/images/icon-suvs.svg";
import sportsCarIcon from "../static/images/icon-luxury.svg";
import Card, { CardColorType } from "./Card";

interface IContent {
  icon: string;
  color: CardColorType;
  heading: string;
  paragraph: string;
}

const text: IContent[] = [
  {
    icon: carIcon,
    color: "orange",
    heading: "SEDANS",
    paragraph:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    icon: suvIcon,
    color: "green",
    heading: "SUVS",
    paragraph:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    icon: sportsCarIcon,
    color: "darkGreen",
    heading: "LUXURY",
    paragraph:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
];

function ThreeCardsView() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3">
      {text.map((x) => (
        <Card
          icon={x.icon}
          heading={x.heading}
          paragraph={x.paragraph}
          color={x.color}
        />
      ))}
    </div>
  );
}

export default ThreeCardsView;
