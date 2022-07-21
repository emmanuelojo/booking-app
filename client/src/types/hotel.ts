export interface HotelInterface {
  _id: string
  name: string;
  type: string;
  city: string;
  address: string;
  distance: string;
  photos: string[];
  title: string;
  description: string;
  rating: number;
  rooms: string[];
  cheapestPrice: number;
  featured: boolean;
};

export interface HeaderProps  {
  type: string;
};

export interface DateRangeInterface {
  startDate: Date | undefined;
  endDate: Date | undefined;
  // startDate: Date
  // endDate: Date
  key: string;
};
