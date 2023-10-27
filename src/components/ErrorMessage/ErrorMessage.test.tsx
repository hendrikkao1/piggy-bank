import { render } from "@/test-utils";
import { ErrorMessage } from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders", () => {
    const { container } = render(<ErrorMessage>error</ErrorMessage>);

    expect(container).toMatchSnapshot();
  });
});
