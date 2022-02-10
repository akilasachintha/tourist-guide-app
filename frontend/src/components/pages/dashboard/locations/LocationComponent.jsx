import React from "react";
import { Button } from "../../../button/Button";


const LocationComponent = () => {
  return (
    <div>
      <Button
        className="btns"
        buttonStyle="btn--black"
        buttonSize="btn--large"
        path="/dashboard/location/add-new-location"
      >
        Add New Location
      </Button>
    </div>
  );
};

export default LocationComponent;
