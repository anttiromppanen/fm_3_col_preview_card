export type CardColorType = "orange" | "green" | "darkGreen";

interface Props {
  icon: string;
  heading: string;
  paragraph: string;
  color?: CardColorType;
}

function Card({ icon, heading, paragraph, color = "orange" }: Props) {
  const backgroundVariants = {
    orange: "bg-userBrightOrange",
    green: "bg-userDarkCyan",
    darkGreen: "bg-userVeryDarkCyan",
  };

  const buttonColorVariants = {
    orange: "text-userBrightOrange",
    green: "text-userDarkCyan",
    darkGreen: "text-userVeryDarkCyan",
  };

  return (
    <div
      className={`flex flex-col justify-between p-10 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-none sm:last:rounded-none md:first:rounded-l-lg md:last:rounded-r-lg ${backgroundVariants[color]}`}
    >
      <div className="flex flex-col gap-y-8">
        <img src={icon} alt="Car icon" className="w-14" />
        <h1 className="font-bigShouldersDisplay text-4xl text-userVeryLightGray">
          {heading}
        </h1>
        <p className="line-clamp-4 text-[15px] text-userParagraphWhite">
          {paragraph}
        </p>
      </div>
      <button
        type="button"
        className={`
          mt-8 w-fit 
          rounded-3xl border-2 border-userVeryLightGray
         bg-userVeryLightGray 
         px-8 py-3 
         text-userBrightOrange 
         hover:bg-inherit hover:text-userVeryLightGray 
         md:mt-20 
         ${buttonColorVariants[color]}`}
      >
        Learn More
      </button>
    </div>
  );
}

Card.defaultProps = {
  color: "orange",
};

export default Card;
