import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/site";

type ContactDetailsProps = {
  className?: string;
  stacked?: boolean;
};

export function ContactDetails({
  className = "",
  stacked = false,
}: ContactDetailsProps) {
  const linkClass =
    "font-semibold text-foreground underline-offset-2 hover:underline";

  return (
    <address className={`not-italic ${className}`}>
      <a className={linkClass} href={`mailto:${CONTACT_EMAIL}`}>
        {CONTACT_EMAIL}
      </a>
      {stacked ? <br /> : <span aria-hidden="true"> · </span>}
      <a className={linkClass} href={`tel:${CONTACT_PHONE_TEL}`}>
        {CONTACT_PHONE_DISPLAY}
      </a>
    </address>
  );
}
