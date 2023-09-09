import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/11/02/Photos/Processed/statue_of_unity_sardar_patel-U205730969126CB--621x414@LiveMint.jpg",
    title: "Statue of Unity",
    description: "Tallest Building in the world",
    address: "Navagam, India(IN)",
    creatorId: "u1",
    location: { lat: 21.838031685449245, lng: 73.71911602170074 },
  },
  {
    id: "p2",
    imageUrl:
      "https://fastread.in/images/uploads/Galteshwar-Mahadev-Temple.jpg ",
    title: "Galteshwar Mahadev Temple",
    description: "Temple of Lord Shiva",
    address: "Surat, Gujarat, India(IN)",
    creatorId: "u2",
    location: { lat: 21.28072235129267, lng: 73.08025617066227 },
  },
];

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;
  const identifiedPlaces = DUMMY_PLACES.find((p) => p.id === placeId);
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlaces.title,
        isValid: true,
      },
      description: {
        value: identifiedPlaces.description,
        isValid: true,
      },
      address: {
        value: identifiedPlaces.address,
        isValid: true,
      },
    },
    true
  );
  
  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  }

  if (!identifiedPlaces) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="address"
        element=""
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (atleast of length 5)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address"
        onInput={inputHandler}
        initialValue={formState.inputs.address.value}
        initialValid={formState.inputs.address.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
