import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import type { ProposalData } from "./proposal";

Font.registerHyphenationCallback((word) => [word]);

const colors = {
  ink: "#111827",
  muted: "#667085",
  border: "#E4E7EC",
  surface: "#FFFFFF",
  soft: "#F5F7FF",
  accent: "#2563EB",
  purple: "#7C3AED",
  cyan: "#06B6D4",
  dark: "#101828",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.surface,
    color: colors.ink,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.55,
    paddingTop: 48,
    paddingRight: 48,
    paddingBottom: 76,
    paddingLeft: 48,
  },
  cover: {
    backgroundColor: colors.dark,
    color: colors.surface,
  },
  colorRail: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 9,
    flexDirection: "row",
  },
  railBlue: { flex: 1, backgroundColor: colors.accent },
  railPurple: { flex: 1, backgroundColor: colors.purple },
  railCyan: { flex: 1, backgroundColor: colors.cyan },
  brand: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoMark: {
    width: 28,
    height: 28,
    borderRadius: 7,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  logoAccent: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 10,
    height: 28,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: colors.purple,
  },
  logoLetter: {
    color: colors.surface,
    fontFamily: "Helvetica-Bold",
    fontSize: 16,
    zIndex: 2,
  },
  brandName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 15,
    letterSpacing: -0.3,
  },
  coverMain: {
    marginTop: 88,
  },
  eyebrow: {
    color: "#A5B4FC",
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    letterSpacing: 2.2,
    textTransform: "uppercase",
    marginBottom: 16,
  },
  coverTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 35,
    lineHeight: 1.08,
    letterSpacing: -1.2,
    maxWidth: 450,
  },
  coverRule: {
    width: 66,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.cyan,
    marginTop: 27,
    marginBottom: 34,
  },
  preparedCard: {
    backgroundColor: "#1D2939",
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
    borderRadius: 8,
    padding: 20,
    width: 340,
  },
  smallLabel: {
    color: "#98A2B3",
    fontFamily: "Helvetica-Bold",
    fontSize: 7.5,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  clientName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 17,
  },
  companyName: {
    color: "#D0D5DD",
    fontSize: 10.5,
    marginTop: 2,
  },
  coverMeta: {
    flexDirection: "row",
    marginTop: 28,
  },
  coverMetaItem: {
    marginRight: 44,
  },
  coverMetaValue: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.5,
  },
  introCard: {
    marginTop: 48,
    borderTopWidth: 1,
    borderTopColor: "#344054",
    paddingTop: 20,
    maxWidth: 480,
  },
  introText: {
    color: "#D0D5DD",
    fontSize: 10.5,
    lineHeight: 1.65,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.soft,
    color: colors.accent,
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    textAlign: "center",
    paddingTop: 6,
    marginRight: 10,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 18,
    letterSpacing: -0.3,
  },
  sectionRule: {
    flexGrow: 1,
    height: 1,
    backgroundColor: colors.border,
    marginLeft: 14,
  },
  summaryBox: {
    backgroundColor: colors.soft,
    borderRadius: 9,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
    padding: 18,
  },
  bodyText: {
    color: "#344054",
    fontSize: 10,
    lineHeight: 1.65,
  },
  scopeCard: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 15,
    marginBottom: 9,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },
  scopeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.accent,
    marginRight: 8,
  },
  cardTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
  },
  cardDescription: {
    color: colors.muted,
    marginLeft: 15,
  },
  table: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: colors.dark,
    color: colors.surface,
    paddingVertical: 9,
    paddingHorizontal: 11,
    fontFamily: "Helvetica-Bold",
    fontSize: 7.5,
    letterSpacing: 0.7,
    textTransform: "uppercase",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 11,
    paddingHorizontal: 11,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  tableRowAlt: {
    backgroundColor: "#FAFAFB",
  },
  phaseCol: { width: "24%", paddingRight: 8 },
  timingCol: { width: "18%", paddingRight: 8 },
  detailCol: { width: "58%" },
  itemCol: { width: "63%", paddingRight: 10 },
  amountCol: { width: "37%", textAlign: "right" },
  rowTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
  },
  rowSubtext: {
    color: colors.muted,
    fontSize: 8,
    marginTop: 2,
  },
  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.soft,
    borderTopWidth: 2,
    borderTopColor: colors.accent,
    paddingVertical: 13,
    paddingHorizontal: 11,
  },
  totalLabel: {
    width: "63%",
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  totalAmount: {
    width: "37%",
    color: colors.accent,
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
    textAlign: "right",
  },
  twoColumn: {
    flexDirection: "row",
  },
  column: {
    width: "48%",
  },
  columnSpacer: {
    width: "4%",
  },
  noteBox: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 15,
    minHeight: 110,
  },
  noteTitle: {
    color: colors.accent,
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  footer: {
    position: "absolute",
    left: 48,
    right: 48,
    bottom: 25,
    height: 28,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center",
    color: colors.muted,
    fontSize: 7.5,
  },
  coverFooter: {
    borderTopColor: "#344054",
    color: "#98A2B3",
  },
  footerBrand: {
    flexDirection: "row",
    alignItems: "center",
    width: "31%",
  },
  footerMark: {
    width: 13,
    height: 13,
    borderRadius: 3,
    backgroundColor: colors.accent,
    color: colors.surface,
    fontFamily: "Helvetica-Bold",
    fontSize: 7,
    textAlign: "center",
    paddingTop: 2,
    marginRight: 5,
  },
  footerBrandName: {
    fontFamily: "Helvetica-Bold",
  },
  footerClient: {
    width: "46%",
    textAlign: "center",
  },
  footerMeta: {
    width: "23%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerPage: {
    marginLeft: 4,
  },
});

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

function formatMoney(amount: number, currency: ProposalData["currency"]) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
}

function Brand() {
  return (
    <View style={styles.brand}>
      <View style={styles.logoMark}>
        <View style={styles.logoAccent} />
        <Text style={styles.logoLetter}>V</Text>
      </View>
      <Text style={styles.brandName}>VevadeCo</Text>
    </View>
  );
}

function Footer({
  proposal,
  dark = false,
}: {
  proposal: ProposalData;
  dark?: boolean;
}) {
  const preparedFor =
    proposal.preparedFor.company || proposal.preparedFor.name;

  return (
    <View
      style={dark ? [styles.footer, styles.coverFooter] : styles.footer}
      fixed
    >
      <View style={styles.footerBrand}>
        <Text style={styles.footerMark}>V</Text>
        <Text style={styles.footerBrandName}>VevadeCo</Text>
      </View>
      <Text style={styles.footerClient}>Prepared for {preparedFor}</Text>
      <View style={styles.footerMeta}>
        <Text>{formatDate(proposal.proposalDate)}  •</Text>
        <Text
          style={styles.footerPage}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber}/${totalPages}`
          }
        />
      </View>
    </View>
  );
}

function SectionHeading({
  number,
  children,
}: {
  number: string;
  children: string;
}) {
  return (
    <View style={styles.sectionHeader} minPresenceAhead={80}>
      <Text style={styles.sectionNumber}>{number}</Text>
      <Text style={styles.sectionTitle}>{children}</Text>
      <View style={styles.sectionRule} />
    </View>
  );
}

export function ProposalDocument({ proposal }: { proposal: ProposalData }) {
  const total = proposal.lineItems.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <Document
      title={proposal.title}
      author="VevadeCo"
      subject={`Proposal prepared for ${proposal.preparedFor.company}`}
      creator="VevadeCo Proposal Studio"
      creationDate={new Date(`${proposal.proposalDate}T00:00:00Z`)}
      language="en"
    >
      <Page size="LETTER" style={[styles.page, styles.cover]}>
        <View style={styles.colorRail}>
          <View style={styles.railBlue} />
          <View style={styles.railPurple} />
          <View style={styles.railCyan} />
        </View>
        <Brand />

        <View style={styles.coverMain}>
          <Text style={styles.eyebrow}>Project Proposal</Text>
          <Text style={styles.coverTitle}>{proposal.title}</Text>
          <View style={styles.coverRule} />

          <View style={styles.preparedCard}>
            <Text style={styles.smallLabel}>Prepared for</Text>
            <Text style={styles.clientName}>{proposal.preparedFor.name}</Text>
            <Text style={styles.companyName}>
              {proposal.preparedFor.company}
            </Text>
          </View>

          <View style={styles.coverMeta}>
            <View style={styles.coverMetaItem}>
              <Text style={styles.smallLabel}>Proposal date</Text>
              <Text style={styles.coverMetaValue}>
                {formatDate(proposal.proposalDate)}
              </Text>
            </View>
            {proposal.validUntil && (
              <View style={styles.coverMetaItem}>
                <Text style={styles.smallLabel}>Valid until</Text>
                <Text style={styles.coverMetaValue}>
                  {formatDate(proposal.validUntil)}
                </Text>
              </View>
            )}
            <View style={styles.coverMetaItem}>
              <Text style={styles.smallLabel}>Prepared by</Text>
              <Text style={styles.coverMetaValue}>{proposal.preparedBy}</Text>
            </View>
          </View>

          <View style={styles.introCard}>
            <Text style={styles.introText}>
              A focused plan to turn your goals into a polished, scalable
              product—with clear deliverables, transparent investment, and a
              path to launch.
            </Text>
          </View>
        </View>
        <Footer proposal={proposal} dark />
      </Page>

      <Page size="LETTER" style={styles.page} wrap>
        <View style={styles.colorRail}>
          <View style={styles.railBlue} />
          <View style={styles.railPurple} />
          <View style={styles.railCyan} />
        </View>

        <View style={styles.section}>
          <SectionHeading number="01">Executive summary</SectionHeading>
          <View style={styles.summaryBox}>
            <Text style={styles.bodyText}>{proposal.executiveSummary}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeading number="02">Scope & deliverables</SectionHeading>
          {proposal.scope.map((item, index) => (
            <View key={`${item.title}-${index}`} style={styles.scopeCard}>
              <View style={styles.cardHeader}>
                <View style={styles.scopeDot} />
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeading number="03">Timeline & milestones</SectionHeading>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.phaseCol}>Phase</Text>
              <Text style={styles.timingCol}>Timing</Text>
              <Text style={styles.detailCol}>What happens</Text>
            </View>
            {proposal.milestones.map((milestone, index) => (
              <View
                key={`${milestone.title}-${index}`}
                style={[
                  styles.tableRow,
                  index % 2 ? styles.tableRowAlt : {},
                ]}
                wrap={false}
              >
                <Text style={[styles.phaseCol, styles.rowTitle]}>
                  {milestone.title}
                </Text>
                <Text style={[styles.timingCol, styles.rowSubtext]}>
                  {milestone.timing}
                </Text>
                <Text style={[styles.detailCol, styles.rowSubtext]}>
                  {milestone.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeading number="04">Investment</SectionHeading>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.itemCol}>Deliverable</Text>
              <Text style={styles.amountCol}>Investment</Text>
            </View>
            {proposal.lineItems.map((item, index) => (
              <View
                key={`${item.title}-${index}`}
                style={[
                  styles.tableRow,
                  index % 2 ? styles.tableRowAlt : {},
                ]}
                wrap={false}
              >
                <View style={styles.itemCol}>
                  <Text style={styles.rowTitle}>{item.title}</Text>
                  {item.description && (
                    <Text style={styles.rowSubtext}>{item.description}</Text>
                  )}
                </View>
                <Text style={[styles.amountCol, styles.rowTitle]}>
                  {formatMoney(item.amount, proposal.currency)}
                </Text>
              </View>
            ))}
            <View style={styles.totalRow} wrap={false}>
              <Text style={styles.totalLabel}>Total project investment</Text>
              <Text style={styles.totalAmount}>
                {formatMoney(total, proposal.currency)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeading number="05">Terms & next steps</SectionHeading>
          <View style={styles.twoColumn}>
            <View style={[styles.column, styles.noteBox]}>
              <Text style={styles.noteTitle}>Terms</Text>
              <Text style={styles.bodyText}>{proposal.terms}</Text>
            </View>
            <View style={styles.columnSpacer} />
            <View style={[styles.column, styles.noteBox]}>
              <Text style={styles.noteTitle}>Next steps</Text>
              <Text style={styles.bodyText}>{proposal.nextSteps}</Text>
            </View>
          </View>
        </View>

        <Footer proposal={proposal} />
      </Page>
    </Document>
  );
}
