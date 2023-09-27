import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShipments } from "./reducers/shipmentSlice.js";
import ShipmentsTable from "./components/shipmentsTable.jsx";

function App() {
  const dispatch = useDispatch();

  const shipments = useSelector((state) => state.shipments.data);
  const isLoading = useSelector((state) => state.shipments.isLoading);

  useEffect(() => {
    dispatch(fetchShipments());
  }, [dispatch]);

  const handleEdit = (shipment) => {
    console.log("Edit shipment", shipment);
  };

  const handleDelete = (shipment) => {
    console.log("Delete shipment", shipment);
  };

  return (
    <div>
      <h1>Shipments</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : shipments && shipments.length > 0 ? (
        <ul>
          <ShipmentsTable
            shipments={shipments}
            onEdit={handleEdit}
            onDelete={handleDelete}
          ></ShipmentsTable>
        </ul>
      ) : (
        <p>No shipments available.</p>
      )}
    </div>
  );
}

export default App;
