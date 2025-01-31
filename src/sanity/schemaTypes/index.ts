import { type SchemaTypeDefinition } from "sanity";
import { Blog } from "./Blog";
import { User } from "./User";
import { Vehicle } from "./Vehicle";
import { Location } from "./Location";
import { Contact } from "./Contact";
import { Review } from "./Review";
import { Services } from "./Services";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Blog, User, Vehicle, Location, Contact, Review, Services],
};
