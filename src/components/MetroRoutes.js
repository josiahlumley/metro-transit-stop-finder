import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import Direction from "./Direction";
import { updateRoute, updateDirections } from "../transitSlice";
import { fetchRoutes, fetchDirections } from "../services/NextTripService";
import "../App.css";

export default function MetroRoutes() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [routes, setRoutes] = useState([]);

  const route = useSelector((state) => state.transit.route);

  const handleChange = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    const routeId = event.target.options[selectedIndex].getAttribute("id");
    const routeName = event.target.options[selectedIndex].value;

    dispatch(updateRoute({ id: routeId, name: routeName }));

    fetchDirections(routeId).then(
      (result) => {
        setIsLoaded(true);
        const directions = result.map((direction) => {
          return {
            id: direction.direction_id,
            name: direction.direction_name,
            isSelected: false
          };
        });
        dispatch(updateDirections(directions));
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  };

  useEffect(() => {
    fetchRoutes().then(
      (result) => {
        setIsLoaded(true);
        setRoutes(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <CircularProgress className="spinner" data-testid="spinner"/>;
  } else {
    return (
      <div className="route-select-container" data-testid="metro-routes">
        <select
          id="routes"
          data-testid="route-select"
          name="routes"
          onChange={handleChange}
          value={route ? route.name : "select route"}
        >
          <option disabled value="select route">
            {" "}
            Select a route
          </option>
          {routes.map((r, index) => (
            <option key={index} id={r.route_id} value={r.route_label}>
              {r.route_label}
            </option>
          ))}
        </select>
        <Direction setIsLoaded={setIsLoaded}> setError={setError}</Direction>
      </div>
    );
  }
}
