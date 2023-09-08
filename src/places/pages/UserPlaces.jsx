import React from "react";

import PlaceList from "../components/PlaceList";

const UserPlaces = (props) => {
 const DUMMY_PLACES = [
    {
      id: "p1",
      imageUrl: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/11/02/Photos/Processed/statue_of_unity_sardar_patel-U205730969126CB--621x414@LiveMint.jpg",
      title: "Statue of Unity",
      description: "Tallest Building in the world",
      address: "Navagam, India(IN)",
      creatorId: "u1",
      location: { lat: 21.838, lng: 21.838 },
    },
    {
      id: "p2",
      imageUrl:
        "https://gujaratdarshanguide.com/wp-content/uploads/2021/11/Galteshwar-Mahadev-Temple.jpg",
      title: "Galteshwar Mahadev Temple",
      description: "Temple of Lord Shiva",
      address: "Surat, Gujarat, India(IN)",
      creatorId: "u2",
      location: { lat: 21.2268256, lng: 72.8152983 },
    },
  ];

  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
