export const proposalCurrencies = ["USD", "CAD", "GBP", "EUR"] as const;

export type ProposalCurrency = (typeof proposalCurrencies)[number];

export type ProposalSection = {
  title: string;
  description: string;
};

export type ProposalMilestone = {
  title: string;
  timing: string;
  description: string;
};

export type ProposalLineItem = {
  title: string;
  description: string;
  amount: number;
};

export type ProposalData = {
  title: string;
  proposalDate: string;
  validUntil?: string;
  preparedFor: {
    name: string;
    company: string;
    email?: string;
  };
  preparedBy: string;
  executiveSummary: string;
  scope: ProposalSection[];
  milestones: ProposalMilestone[];
  lineItems: ProposalLineItem[];
  currency: ProposalCurrency;
  terms: string;
  nextSteps: string;
};

type ValidationResult =
  | { data: ProposalData; error?: never }
  | { data?: never; error: string };

const MAX_ITEMS = 12;

function text(
  value: unknown,
  label: string,
  maxLength: number,
  required = true
): string {
  if (typeof value !== "string") {
    if (!required && value == null) return "";
    throw new Error(`${label} is required`);
  }

  const normalized = value.trim();
  if (required && !normalized) throw new Error(`${label} is required`);
  if (normalized.length > maxLength) {
    throw new Error(`${label} must be ${maxLength} characters or fewer`);
  }
  return normalized;
}

function date(value: unknown, label: string, required = true): string {
  const normalized = text(value, label, 10, required);
  if (!normalized && !required) return "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
    throw new Error(`${label} must be a valid date`);
  }
  const parsed = new Date(`${normalized}T00:00:00Z`);
  if (
    Number.isNaN(parsed.getTime()) ||
    parsed.toISOString().slice(0, 10) !== normalized
  ) {
    throw new Error(`${label} must be a valid date`);
  }
  return normalized;
}

function array(value: unknown, label: string): unknown[] {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`Add at least one ${label}`);
  }
  if (value.length > MAX_ITEMS) {
    throw new Error(`${label} is limited to ${MAX_ITEMS} items`);
  }
  return value;
}

export function validateProposal(value: unknown): ValidationResult {
  try {
    if (!value || typeof value !== "object") {
      return { error: "Invalid proposal data" };
    }

    const input = value as Record<string, unknown>;
    const client =
      input.preparedFor && typeof input.preparedFor === "object"
        ? (input.preparedFor as Record<string, unknown>)
        : {};

    const currency = text(input.currency, "Currency", 3) as ProposalCurrency;
    if (!proposalCurrencies.includes(currency)) {
      return { error: "Select a supported currency" };
    }

    const scope = array(input.scope, "scope item").map((item, index) => {
      const row = item as Record<string, unknown>;
      return {
        title: text(row?.title, `Scope item ${index + 1} title`, 100),
        description: text(
          row?.description,
          `Scope item ${index + 1} description`,
          1_200
        ),
      };
    });

    const milestones = array(input.milestones, "milestone").map(
      (item, index) => {
        const row = item as Record<string, unknown>;
        return {
          title: text(row?.title, `Milestone ${index + 1} title`, 100),
          timing: text(row?.timing, `Milestone ${index + 1} timing`, 80),
          description: text(
            row?.description,
            `Milestone ${index + 1} description`,
            800
          ),
        };
      }
    );

    const lineItems = array(input.lineItems, "investment item").map(
      (item, index) => {
        const row = item as Record<string, unknown>;
        const amount = Number(row?.amount);
        if (!Number.isFinite(amount) || amount < 0 || amount > 100_000_000) {
          throw new Error(
            `Investment item ${index + 1} must have a valid amount`
          );
        }
        return {
          title: text(
            row?.title,
            `Investment item ${index + 1} title`,
            100
          ),
          description: text(
            row?.description,
            `Investment item ${index + 1} description`,
            500,
            false
          ),
          amount,
        };
      }
    );

    return {
      data: {
        title: text(input.title, "Proposal title", 140),
        proposalDate: date(input.proposalDate, "Proposal date"),
        validUntil: date(input.validUntil, "Valid-until date", false) || undefined,
        preparedFor: {
          name: text(client.name, "Client name", 100),
          company: text(client.company, "Company", 120),
          email: text(client.email, "Client email", 200, false) || undefined,
        },
        preparedBy: text(input.preparedBy, "Prepared by", 100),
        executiveSummary: text(
          input.executiveSummary,
          "Executive summary",
          3_000
        ),
        scope,
        milestones,
        lineItems,
        currency,
        terms: text(input.terms, "Terms", 3_000),
        nextSteps: text(input.nextSteps, "Next steps", 2_000),
      },
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Invalid proposal data",
    };
  }
}
