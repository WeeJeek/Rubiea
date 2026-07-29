import { stoneFields } from "./content.js";

function demonstrationStone(stoneId) {
  return {
    id: stoneId,
    facts: Object.fromEntries(stoneFields.map((field) => [field, field === "stone_id" ? stoneId : null])),
  };
}

export const previewStones = [
  demonstrationStone("RUB-001"),
  demonstrationStone("RUB-002"),
];
