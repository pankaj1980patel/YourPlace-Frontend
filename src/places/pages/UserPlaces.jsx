import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/11/02/Photos/Processed/statue_of_unity_sardar_patel-U205730969126CB--621x414@LiveMint.jpg",
    title: "Statue of Unity",
    description: "Tallest Building in the world",
    address: "Navagam, India(IN)",
    creatorId: "u1",
    location: { lat: 21.838031685449245, lng : 73.71911602170074 },
  },
  {
    id: "p2",
    imageUrl:
      "https://fastread.in/images/uploads/Galteshwar-Mahadev-Temple.jpg ",
    title: "Galteshwar Mahadev Temple",
    description: "Temple of Lord Shiva",
    address: "Surat, Gujarat, India(IN)",
    creatorId: "u2",
    location: { lat: 21.28072235129267, lng : 73.08025617066227 },
  },
];
const UserPlaces = (props) => {
  const userId = useParams().userId;
  console.log(userId);
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creatorId === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
