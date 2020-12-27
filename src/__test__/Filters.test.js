import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filters from "../components/Filters";

const FILTERS_STATE = {
  type: "all",
};

test("calls the `onChangeType` prop callback when the animal type select changes", () => {
  const onChangeType = jest.fn();
  render(<Filters onChangeType={onChangeType} filters={FILTERS_STATE} />);
  const select = screen.queryByLabelText("type");
  fireEvent.change(select, { target: { value: "dog" } });
  expect(onChangeType).toHaveBeenCalled();
});

test('calls the `onFindPetsClick` callback prop when the "Find pets" button is clicked', () => {
  const onFindPetsClick = jest.fn();
  render(<Filters onFindPetsClick={onFindPetsClick} filters={FILTERS_STATE} />);
  const button = screen.queryByText(/Find pets/g);
  fireEvent.click(button);
  expect(onFindPetsClick).toHaveBeenCalled();
});
