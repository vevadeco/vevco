import Image from "next/image";

/**
 * Official monochrome Shopify logo for a base-level Partner Program member.
 *
 * Shopify's current Partner Toolkit (the co-marketing guidelines that replaced
 * shopify.com/partners/brand-guidelines) says not to use the "shopify partners"
 * lockup, the green bag, or a tier badge. Partners show the monochrome logo,
 * unaltered, at least 80px wide, with clear space equal to the wordmark x-height.
 *
 * The file in public/brand is Shopify's monotone black SVG from
 * https://www.shopify.com/brand-assets (shopify-monotone.zip). Do not edit it.
 *
 * The caption is site type, separated by that clear space. It states membership
 * only. It is not a Select, Plus, Premier, or Platinum badge.
 */
const LOGO_WIDTH = "7.5rem"; // 120px, above the 80px digital minimum
const CLEAR_SPACE = "calc(7.5rem * 0.121)"; // wordmark x-height at this width

type ShopifyPartnerMarkProps = {
  className?: string;
};

export function ShopifyPartnerMark({ className = "" }: ShopifyPartnerMarkProps) {
  return (
    <a
      href="https://www.shopify.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex w-max shrink-0 flex-col items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
      style={{
        paddingTop: CLEAR_SPACE,
        paddingInline: CLEAR_SPACE,
      }}
    >
      <Image
        src="/brand/shopify-monotone-black.svg"
        alt=""
        width={4463}
        height={1275}
        style={{
          width: LOGO_WIDTH,
          height: "calc(7.5rem * 127.5 / 446.3)",
        }}
      />
      <span
        className="text-center text-xs font-medium text-foreground group-hover:underline group-hover:underline-offset-4"
        style={{ marginTop: CLEAR_SPACE }}
      >
        Shopify Partner
      </span>
    </a>
  );
}
