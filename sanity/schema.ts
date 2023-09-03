import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schemas/pageInfo";
import social from "./schemas/social";
import experience from "./schemas/experience";
import project from "./schemas/project";
import skill from "./schemas/skill";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, social, experience, project, skill],
};
