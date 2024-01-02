import Social from "./social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <div>
      <div className="flex flex-col space-y-2 mb-8 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{headerLabel}</h1>

        <BackButton href={backButtonHref} label={backButtonLabel} />
      </div>
      {children}
      {showSocial && <Social />}
    </div>
  );
};
