export type Case = {
  slug: string;
  title: string;
  category: string;
  result: string;
  problem: string;
  strategy: string;
};

export const cases: Case[] = [
  {
    slug: "land-dispute-resolution",
    title: "Multi-Acre Land Dispute Successfully Resolved",
    category: "Civil Litigation",
    result: "Final decree secured for 12 family members",
    problem:
      "Dispute over ancestral land ownership among multiple family members causing long-term legal conflict.",
    strategy:
      "Filed structured civil suit, presented land records, and mediated negotiation between parties.",
  },
  {
    slug: "criminal-acquittal",
    title: "Criminal Defense Case – Full Acquittal",
    category: "Criminal Defense",
    result: "Client acquitted due to insufficient evidence",
    problem:
      "Client falsely accused in a criminal case with weak evidence presented by the prosecution.",
    strategy:
      "Cross-examined witnesses, challenged evidence validity, and exposed inconsistencies in statements.",
  },
  {
    slug: "corporate-investment",
    title: "Foreign Company Setup in Bangladesh",
    category: "Corporate Law",
    result: "Fully compliant company formation completed",
    problem:
      "Foreign investor required legal compliance for entering the Bangladeshi market.",
    strategy:
      "Handled registration, regulatory approvals, and ensured compliance with local laws.",
  },
  {
    slug: "tax-settlement",
    title: "Income Tax Dispute Settlement",
    category: "Tax Law",
    result: "Reduced client liability significantly",
    problem:
      "Client faced excessive tax claims and penalties from authority.",
    strategy:
      "Filed appeal, presented financial documentation, and negotiated revised assessment.",
  },
  {
    slug: "contract-dispute",
    title: "Commercial Contract Dispute Resolved",
    category: "Corporate Law",
    result: "Dispute settled without litigation",
    problem:
      "Business conflict arising from breach of contract terms.",
    strategy:
      "Negotiated settlement and avoided prolonged court proceedings.",
  },
];