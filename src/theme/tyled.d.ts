import "styled-components";
import { Color } from "./theme.interface";

declare module "styled-components/native" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: Color;
      secondary: Color;
      background: Color;
      white: Color;
      border: Color;
      card: Color;
      text: Color;

      stateOpen: Color;
      stateRejected: Color;
      stateOverdue: Color;

      primaryOpacity025: Color;
      primaryOpacity050: Color;
      primaryOpacity075: Color;
    };
  }
}
