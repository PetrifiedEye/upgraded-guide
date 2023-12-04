import { DefaultTheme } from "styled-components/native";

const lightTheme: DefaultTheme = {
  borderRadius: "10px",

  colors: {
    white: "#fff", // A neutral, medium-dark gray
    primary: "#cf1259", // A bright, medium-dark blue
    secondary: "#dd7596", // A bright, medium-dark green
    background: "#fff", // A bright, medium-dark orange
    border: "#b7c3f3", // A bright, medium-dark orange
    card: "#fcfff7", // light white
    text: "#000",

    stateOpen: "#9AE6B4",
    stateRejected: "#F56565",
    stateOverdue: "#F6E05E",

    primaryOpacity025: "#cf125925",
    primaryOpacity050: "#cf125950",
    primaryOpacity075: "#cf125975",
  },
};

const darkTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    white: "#fff", // A neutral, medium-dark gray
    primary: "#A3BFFA", // A bright, medium-dark blue
    secondary: "#9AE6B4", // A bright, medium-dark green
    background: "#fff", // A bright, medium-dark orange
    border: "#718096", // A bright, medium-dark orange
    card: "#fcfff7",
    text: "#000",

    stateOpen: "#9AE6B4",
    stateRejected: "#F56565",
    stateOverdue: "#F6E05E",

    primaryOpacity025: "#cf125925",
    primaryOpacity050: "#cf125950",
    primaryOpacity075: "#cf125975",
  },
};

export { lightTheme, darkTheme };
