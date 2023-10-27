import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import { useTranslations } from "next-intl";

interface FromFieldErrorProps extends React.PropsWithChildren {
  error: string | undefined;
}

export const FromFieldError = ({ children, error }: FromFieldErrorProps) => {
  const t = useTranslations("ExpenseForm");

  return (
    <>
      {children}
      {error && (
        <div className="mt-2">
          <ErrorMessage>{t(error)}</ErrorMessage>
        </div>
      )}
    </>
  );
};
