import { SeasonStyles } from "./SeasonStyles";
import springUrl from "../assets/default/spring.jpg";
import summerUrl from "../assets/default/summer.jpg";
import fallUrl from "../assets/default/fall.jpg";
import winterUrl from "../assets/default/winter.jpg";

export const defaultSeasonStyles: SeasonStyles = {
    spring: {
      imageUrl: springUrl,
      color: "#3d883d",
    },
    summer: {
      imageUrl: summerUrl,
      color: "#fdd218c2",
    },
    fall: {
      imageUrl: fallUrl,
      color: "#ff7100",
    },
    winter: {
      imageUrl: winterUrl,
      color: "lightblue",
    },
  };