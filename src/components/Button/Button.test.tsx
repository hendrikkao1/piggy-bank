import { render } from "@/test-utils";
import { Button } from "./Button";

describe("Button", () => {
  it("renders", () => {
    const { container } = render(<Button>Button</Button>);

    expect(container).toMatchSnapshot();
  });

  it("renders as link", () => {
    const { container } = render(
      <Button as="a" href="/link">
        Button
      </Button>,
    );

    expect(container).toMatchSnapshot();
  });

  it("accepts props", () => {
    const { container } = render(<Button disabled>Button</Button>);

    expect(container).toMatchSnapshot();
  });
});
