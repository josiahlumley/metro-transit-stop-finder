import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import Header from "./components/Header";
import MetroRoutes from "./components/MetroRoutes";

const renderWithRedux = (component) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

afterEach(cleanup);

it("should take a snapshot", () => {
  const { asFragment } = renderWithRedux(<App />)
  expect(asFragment).toMatchSnapshot();
})

test("renders metro transit stop finder", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Metro Transit Stop Finder/i);
  expect(linkElement).toBeInTheDocument();
});

it("should render the spinner", () => {
  const { getByTestId } = renderWithRedux(<MetroRoutes />)
  const metroRoutes = getByTestId("spinner")

  expect(metroRoutes).toBeInTheDocument();
})