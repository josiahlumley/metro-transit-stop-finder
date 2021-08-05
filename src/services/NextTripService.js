export const fetchRoutes = () => {
    return fetch("https://svc.metrotransit.org/nextripv2/routes").then((res) =>
      res.json()
    );
  };
  
  export const fetchDirections = (routeId) => {
    return fetch(
      `https://svc.metrotransit.org/nextripv2/directions/${routeId}`
    ).then((res) => res.json());
  };
  
  export const fetchStops = (routeId, directionId) => {
    return fetch(
      `https://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}`
    ).then((res) => res.json());
  };