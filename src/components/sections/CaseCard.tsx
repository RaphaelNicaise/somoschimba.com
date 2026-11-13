import { CaseStudy } from "@/data/cases";
import { Tag } from "@/components/ui/Tag";
import { HandshakeSticker } from "@/components/ui/HandshakeSticker";

interface CaseCardProps {
  caseStudy: CaseStudy;
}

export function CaseCard({ caseStudy }: CaseCardProps) {
  return (
    <article className="ch-case">
      <div
        className="ch-case__media"
        style={{ backgroundImage: `url(${caseStudy.image})` }}
      >
        <div className="ch-case__collab">
          <span>{caseStudy.client}</span>
          <HandshakeSticker size="sm" />
          <span>Chimba</span>
        </div>
      </div>

      <div className="ch-case__head">
        <h3 className="ch-case__client">
          {caseStudy.clientStyled ? (
            <>
              {caseStudy.clientStyled.normal}
              <em>{caseStudy.clientStyled.italic}</em>
            </>
          ) : (
            caseStudy.client
          )}
        </h3>
        <span className="ch-case__year">{caseStudy.year}</span>
      </div>

      <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.4", color: "var(--ink-muted)" }}>
        {caseStudy.summary}
      </p>

      <div className="ch-case__tags">
        {caseStudy.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}
