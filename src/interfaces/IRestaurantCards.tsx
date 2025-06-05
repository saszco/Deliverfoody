import IDish from './IDish';

interface IRestaurantCard {
  id: string;
  featuredRowTitle: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: IDish[];
  long: string;
  lat: string;
}

export default IRestaurantCard;
