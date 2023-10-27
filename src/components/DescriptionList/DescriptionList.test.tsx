import { render } from "@/test-utils";
import { DescriptionList } from "./DescriptionList";

describe("DescriptionList", () => {
  it("renders", () => {
    const { container } = render(
      <DescriptionList items={[["term", "description"]]} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders react nodes", () => {
    const { container } = render(
      <DescriptionList
        items={[["term", <span key="description">description</span>]]}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
