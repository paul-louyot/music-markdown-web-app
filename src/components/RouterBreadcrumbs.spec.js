import { ThemeProvider, createTheme } from "@mui/material/styles";
import { render, screen } from "@testing-library/react";

import { HashRouter as Router } from "react-router-dom";
import RouterBreadcrumbs from "./RouterBreadcrumbs";

describe("RouterBreadcrumbs", () => {
  beforeEach(async () => {
    fetch.resetMocks();
    localStorage.clear();
  });

  it("should render breadcrumbs for the browser view", () => {
    render(
      <ThemeProvider theme={createTheme()}>
        <Router>
          <RouterBreadcrumbs pathname={"/repos/owner/repo/browser/master"} />
        </Router>
      </ThemeProvider>
    );

    const breadcrumbs = screen.getAllByRole("breadcrumb");
    expect(breadcrumbs[0].textContent).toBe("Home");
    expect(breadcrumbs[1].textContent).toBe("owner");
    expect(breadcrumbs[2].textContent).toBe("repo");
    expect(breadcrumbs[3].textContent).toBe("master");
  });

  it("should render breadcrumbs for a folder in the browser view", () => {
    render(
      <ThemeProvider theme={createTheme()}>
        <Router>
          <RouterBreadcrumbs
            pathname={"/repos/owner/repo/browser/master/path"}
          />
        </Router>
      </ThemeProvider>
    );

    const breadcrumbs = screen.getAllByRole("breadcrumb");
    expect(breadcrumbs[0].textContent).toBe("Home");
    expect(breadcrumbs[1].textContent).toBe("owner");
    expect(breadcrumbs[2].textContent).toBe("repo");
    expect(breadcrumbs[3].textContent).toBe("master");
    expect(breadcrumbs[4].textContent).toBe("path");
  });

  it("should render breadcrumbs for a song in the editor view", () => {
    render(
      <ThemeProvider theme={createTheme()}>
        <Router>
          <RouterBreadcrumbs
            pathname={"/repos/owner/repo/editor/master/song.md"}
          />
        </Router>
      </ThemeProvider>
    );

    const breadcrumbs = screen.getAllByRole("breadcrumb");
    expect(breadcrumbs[0].textContent).toBe("Home");
    expect(breadcrumbs[1].textContent).toBe("owner");
    expect(breadcrumbs[2].textContent).toBe("repo");
    expect(breadcrumbs[3].textContent).toBe("master");
    expect(breadcrumbs[4].textContent).toBe("song.md");
  });

  it("should render breadcrumbs for a song in a folder in the editor view", () => {
    render(
      <ThemeProvider theme={createTheme()}>
        <Router>
          <RouterBreadcrumbs
            pathname={"/repos/owner/repo/editor/master/folder/song.md"}
          />
        </Router>
      </ThemeProvider>
    );

    const breadcrumbs = screen.getAllByRole("breadcrumb");
    expect(breadcrumbs[0].textContent).toBe("Home");
    expect(breadcrumbs[1].textContent).toBe("owner");
    expect(breadcrumbs[2].textContent).toBe("repo");
    expect(breadcrumbs[3].textContent).toBe("master");
    expect(breadcrumbs[4].textContent).toBe("folder");
    expect(breadcrumbs[5].textContent).toBe("song.md");
  });
});
