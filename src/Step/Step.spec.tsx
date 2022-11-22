import { screen, render, fireEvent } from "@testing-library/react";

import Step, { Step as StepType } from "./Step";

const steps: StepType[] = [
  { status: "finished", title: "Passo 1" },
  { status: "default", title: "Passo 2" },
];

test("should render Step component", () => {
  render(<Step steps={steps} />);

  const step = screen.getByTestId("steps");

  expect(step).toBeInTheDocument();
});

test("should call onClick when click in step", () => {
  const mockedOnClick = jest.fn();
  render(
    <Step
      steps={[
        { status: "finished", title: "Passo 1", onClick: mockedOnClick },
        { status: "default", title: "Passo 2" },
      ]}
    />
  );

  const steps = screen.getAllByTestId("step-circle");

  expect(steps.length).toBe(2);

  fireEvent.click(steps[0]);
  expect(mockedOnClick).toHaveBeenCalledTimes(1);
});
