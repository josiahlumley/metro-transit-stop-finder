import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { updateDirections, updateStops } from "../transitSlice";
import { fetchStops } from "../services/NextTripService";
import "../App.css";

export default function Direction(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const route = useSelector((state) => state.transit.route);
  const directions = useSelector((state) => state.transit.directions);

  const handleClick = (event) => {
    const selectedDirectionId = Number(event.target.id);

    const updatedDirections = directions.map((direction) => {
      return {
        id: direction.id,
        name: direction.name,
        isSelected: direction.id === selectedDirectionId
      };
    });

    dispatch(updateDirections(updatedDirections));

    props.setIsLoaded(false);
    fetchStops(route.id, selectedDirectionId).then(
      (result) => {
        props.setIsLoaded(true);

        const stops = result.map((stop) => stop.description);
        dispatch(updateStops(stops));
        history.push("/stops");
      },
      (error) => {
        props.setError(error);
        props.setIsLoaded(true);
      }
    );
  };

  return (
    <div className="button-container">
      {directions[0] && (
        <button
          id={directions[0].id}
          value={directions[0].name}
          onClick={handleClick}
        >
          {directions[0].name}
        </button>
      )}
      {directions[1] && (
        <button
          id={directions[1].id}
          value={directions[1].name}
          onClick={handleClick}
        >
          {directions[1].name}
        </button>
      )}
    </div>
  );
}
