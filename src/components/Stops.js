import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "../App.css";

export default function Stops() {
  const route = useSelector((state) => state.transit.route);
  const selectedDirection = useSelector((state) => {
    return state.transit.directions.find((direction) => direction.isSelected);
  });
  const stops = useSelector((state) => state.transit.stops);

  return stops.length <= 0 ? (
    <Redirect to="/" />
  ) : (
    <div className="stops-container">
      <table>
        <thead>
          <tr>
            <th>
              {route && route.name} -{" "}
              {selectedDirection && selectedDirection.name + " Stops"}
            </th>
          </tr>
        </thead>
        {stops.map((stop, index) => (
          <tbody key={index}>
            <tr>
              <td>{stop}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
