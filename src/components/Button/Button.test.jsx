import { describe, expect, test, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("test", () => {
  const mockFunction = vi.fn(() => true);

  beforeEach(() => {
    render(
      <Button onClick={mockFunction}>
        <h3>test</h3>
      </Button>
    );
  });
  test("Button contains children", () => {
    const button = screen.getByText("test").closest("button");
    expect(button.innerHTML).toContain("h3");
  });

  test("Button has the class of button", () => {
    const button = screen.getByText("test").closest("button");
    expect(button.classList.contains("button")).toBeTruthy();
  });

  test("Clicking the button once should fire the function once", () => {
    const button = screen.getByText("test").closest("button");
    fireEvent.click(button);
    expect(mockFunction).toBeCalledTimes(1);
  });
});
