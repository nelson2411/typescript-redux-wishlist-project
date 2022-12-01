// Define types for the video games model

export type VideoGame = {
  id: number;
  name: string;
  year: number;
  genre: string;
  publisher: string;
  platforms: string[];
  image: string;
  price: number;
};
