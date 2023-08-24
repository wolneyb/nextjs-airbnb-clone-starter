import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Whishlist } from "../whishlist/Whishlist";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listings?: Array<Listing>;
  roles: JsonValue;
  trips?: Array<Trip>;
  updatedAt: Date;
  username: string;
  whishlists?: Array<Whishlist>;
};