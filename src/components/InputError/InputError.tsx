import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";

interface FromFieldErrorProps extends React.PropsWithChildren {
  error: string | undefined;
}

export const FromFieldError = ({ children, error }: FromFieldErrorProps) => {
  return (
    <>
      {children}
      {error && (
        <div className="mt-2">
          <ErrorMessage>{error}</ErrorMessage>
        </div>
      )}
    </>
  );
};
