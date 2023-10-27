import { render } from "@/test-utils";
import { FormInput } from "./FormInput";
import { UseFormReturn } from "react-hook-form";
import { useFormContext } from "react-hook-form";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormContext: jest.fn(),
}));

const mockUseFormContext = useFormContext as jest.MockedFunction<
  typeof useFormContext
>;

describe("FormInput", () => {
  describe("aria-invalid", () => {
    it("have `false` when there is error", () => {
      mockUseFormContext.mockReturnValue({
        register: jest.fn(),
        formState: {
          errors: {},
        },
      } as unknown as UseFormReturn);

      const { container } = render(<FormInput field="amount" />);

      expect(container).toMatchSnapshot();
    });

    it("have `true` when there is an error", () => {
      mockUseFormContext.mockReturnValue({
        register: jest.fn(),
        formState: {
          errors: {
            amount: {
              message: "amount.required",
            },
          },
        },
      } as unknown as UseFormReturn);

      const { container } = render(<FormInput field="amount" />);

      expect(container).toMatchSnapshot();
    });
  });
});
