import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Whishlist } from "../whishlist/Whishlist";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy?: User;
  location: string;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmeneties: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number | null;
  tittle: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  whishlists?: Array<Whishlist>;
};
