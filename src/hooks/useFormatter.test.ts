import { renderHook } from "@/test-utils";
import { useFormatter } from "./useFormatter";
import Big from "big.js";

describe("useFormatter", () => {
  it("should format amout", () => {
    const { result } = renderHook(() => useFormatter());

    const { formatAmount } = result.current;

    expect(formatAmount(Big("0"))).toStrictEqual("0.00");
    expect(formatAmount(Big("0.01"))).toStrictEqual("0.01");
    expect(formatAmount(Big("100"))).toStrictEqual("100.00");
    expect(formatAmount(Big("-100"))).toStrictEqual("-100.00");
  });

  it("should format amout currency with amount", () => {
    const { result } = renderHook(() => useFormatter());

    const { formatCurrency } = result.current;

    expect(formatCurrency(Big(0), "EUR")).toStrictEqual("0.00 EUR");
  });

  it("should format date", () => {
    const { result } = renderHook(() => useFormatter());

    const { formatDateTime } = result.current;

    expect(formatDateTime(new Date("2023-10-30T00:00:00.000Z"))).toStrictEqual(
      "10/30/2023",
    );
  });
});
