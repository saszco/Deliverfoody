interface IRestaurantCards {
  id: string;
  featuredRowTitle: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: string[];
  long: string;
  lat: string;
}

export default IRestaurantCards;
