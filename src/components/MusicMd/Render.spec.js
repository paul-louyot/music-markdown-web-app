import { createTheme, ThemeProvider } from "@mui/material/styles";
import { render } from "@testing-library/react";
import { YouTubeIdProvider } from "../../context/YouTubeIdProvider";
import Render from "./Render";

describe("Render", () => {
  it("renders without crashing", () => {
    render(
      <YouTubeIdProvider>
        <ThemeProvider theme={createTheme()}>
          <Render source="" />
        </ThemeProvider>
      </YouTubeIdProvider>
    );
  });
});