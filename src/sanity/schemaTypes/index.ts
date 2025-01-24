import { type SchemaTypeDefinition } from "sanity";
import { Blog } from "./Blog";
import { User } from "./User";
import { Category } from "./Category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Blog, User, Category],
};
