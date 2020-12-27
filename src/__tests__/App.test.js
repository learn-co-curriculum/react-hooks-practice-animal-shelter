import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { server } from "../mocks/server";
import { getAll, getByType } from "../mocks/data";
import App from "../components/App";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Fetching pets", () => {
  it("should fetch all pets by default", async () => {
    render(<App />);

    fireEvent.click(screen.getByText(/Find pets/));

    await screen.findAllByTestId("pet");

    expect(screen.getAllByTestId("pet")).toHaveLength(getAll().length);
  });

  it("should fetch pet types using the type parameter based on the filter", async () => {
    render(<App />);

    let type = "micropig";
    fireEvent.change(screen.getByLabelText(/type/), {
      target: { value: type },
    });

    fireEvent.click(screen.getByText(/Find pets/));

    await screen.findAllByTestId("pet");

    expect(screen.getAllByTestId("pet")).toHaveLength(getByType(type).length);
  });
});

describe("Adopting pets", () => {
  it("should set a pet's adopted status to true", async () => {
    render(<App />);

    fireEvent.click(screen.getByText(/Find pets/));

    const buttons = await screen.findAllByText(/Adopt pet/);
    const button = buttons[0];

    fireEvent.click(button);

    expect(button.textContent).toContain("Already adopted");
  });
});
