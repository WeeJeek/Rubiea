import { stoneFields } from "../content.js";

// Required fact keys: stone_id, material_type, weight_ct, dimensions_mm, shape,
// cut, colour_description, clarity_transparency, treatment, origin_opinion,
// laboratory, report_number, report_date, evidence_source.
export function StoneFacts({ facts, labels, unknown }) {
  return (
    <dl className="stone-facts">
      {stoneFields.map((field) => (
        <div key={field}>
          <dt>{labels[field] || field}</dt>
          <dd>{facts[field] || unknown}</dd>
        </div>
      ))}
    </dl>
  );
}
