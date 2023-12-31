import React from "react";
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from "@testing-library/react";

export const AllTheProviders = ({ children }: { children: React.ReactNode }) =>
  children;

const customRender = (ui: React.ReactElement, options: RenderOptions = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

const customRenderHook = <TProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: RenderHookOptions<TProps>,
) => renderHook(callback, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render, customRenderHook as renderHook };
