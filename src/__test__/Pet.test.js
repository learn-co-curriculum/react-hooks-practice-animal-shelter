import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pet from "../components/Pet";

const MALE_DOG = {
  id: "9e7cc723-d7f5-440d-8ead-c311e68014ee",
  type: "dog",
  gender: "male",
  age: 8,
  weight: 6,
  name: "Kennedy",
  isAdopted: false,
};

const FEMALE_CAT = {
  id: "86520b4b-7849-4462-b511-cddc7f416ad6",
  type: "cat",
  gender: "female",
  age: 7,
  weight: 6,
  name: "Cuddles",
  isAdopted: false,
};

const GENDER_ICON_MALE = "♂";
const GENDER_ICON_FEMALE = "♀";

describe("Rendering props", () => {
  test("renders the name", () => {
    render(<Pet pet={MALE_DOG} />);
    expect(
      screen.queryByText(MALE_DOG.name, { exact: false })
    ).toBeInTheDocument();
  });

  test("renders the correct gender icon for male pets", () => {
    render(<Pet pet={MALE_DOG} />);
    expect(
      screen.queryByText(GENDER_ICON_MALE, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.queryByText(GENDER_ICON_FEMALE, { exact: false })
    ).not.toBeInTheDocument();
  });

  test("renders the correct gender icon for female pets", () => {
    render(<Pet pet={FEMALE_CAT} />);
    expect(
      screen.queryByText(GENDER_ICON_MALE, { exact: false })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(GENDER_ICON_FEMALE, { exact: false })
    ).toBeInTheDocument();
  });

  test("renders the pet type", () => {
    render(<Pet pet={FEMALE_CAT} />);
    expect(
      screen.queryByText(FEMALE_CAT.type, { exact: false })
    ).toBeInTheDocument();
  });

  it("renders the pet age", () => {
    render(<Pet pet={FEMALE_CAT} />);
    expect(
      screen.queryByText(FEMALE_CAT.age.toString(), { exact: false })
    ).toBeInTheDocument();
  });

  it("renders the pet weight", () => {
    render(<Pet pet={FEMALE_CAT} />);
    expect(
      screen.queryByText(FEMALE_CAT.weight.toString(), { exact: false })
    ).toBeInTheDocument();
  });
});

describe("Adopting a pet", () => {
  describe("Pet is not adopted yet", () => {
    test("only shows the adopt button", () => {
      render(<Pet pet={FEMALE_CAT} />);
      expect(screen.queryByText(/Adopt pet/)).toBeInTheDocument();
      expect(screen.queryByText(/Already adopted/)).not.toBeInTheDocument();
    });

    test("calls the `onAdoptPet` callback prop when the adopt button is clicked", () => {
      const onAdoptPet = jest.fn();
      render(<Pet pet={FEMALE_CAT} onAdoptPet={onAdoptPet} />);

      const button = screen.queryByText(/Adopt pet/);
      fireEvent.click(button);

      expect(onAdoptPet).toHaveBeenCalled();
    });

    test("calls the `onAdoptPet` callback prop with the pet ID", () => {
      const onAdoptPet = jest.fn();
      render(<Pet pet={FEMALE_CAT} onAdoptPet={onAdoptPet} />);

      const button = screen.queryByText(/Adopt pet/);
      fireEvent.click(button);

      expect(onAdoptPet).toHaveBeenCalledWith(FEMALE_CAT.id);
    });
  });

  describe("Pet is already adopted", () => {
    test("only shows the already adopted button", () => {
      render(<Pet pet={{ ...FEMALE_CAT, isAdopted: true }} />);
      expect(screen.queryByText(/Adopt pet/)).not.toBeInTheDocument();
      expect(screen.queryByText(/Already adopted/)).toBeInTheDocument();
    });

    test("does not call the `onAdoptPet` callback prop when the button is clicked", () => {
      const onAdoptPet = jest.fn();
      render(
        <Pet pet={{ ...FEMALE_CAT, isAdopted: true }} onAdoptPet={onAdoptPet} />
      );

      const button = screen.queryByText(/Already adopted/);
      fireEvent.click(button);

      expect(onAdoptPet).not.toHaveBeenCalled();
    });
  });
});
