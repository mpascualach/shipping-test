import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShipments } from "./reducers/shipmentSlice.js";
import shipmentsTable from "./components/shipmentsTable.jsx";

function App() {
  const dispatch = useDispatch();

  const shipments = useSelector((state) => state.shipments.data);
  const isLoading = useSelector((state) => state.shipments.isLoading);

  useEffect(() => {
    dispatch(fetchShipments());
  }, [dispatch]);

  return (
    <div>
      <h1>Shipments</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : shipments && shipments.length > 0 ? (
        <ul>
          {shipments.map((shipment, index) => (
            <li key={index}>{shipment.name}</li>
          ))}
        </ul>
      ) : (
        <p>No shipments available.</p>
      )}
    </div>
  );
}

export default App;
