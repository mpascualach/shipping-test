import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShipments } from "./reducers/shipmentSlice.js";

import ShipmentsTable from "./components/shipmentsTable.jsx";
import ShipmentDetails from "./components/shipmentDetails.jsx";

import "./styles/index.css";
import "./styles/tailwind.css";

function App() {
  const dispatch = useDispatch();
  const [selectedShipment, setSelectedShipment] = useState(null);

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

  const handleRowClick = (shipment) => {
    setSelectedShipment(shipment);
  };

  if (selectedShipment) {
    return (
      <div>
        <h1 className="text-4xl font-bold underline text-center m-10">
          Shipment details
        </h1>
        <button onClick={() => setSelectedShipment(null)}></button>
        <ShipmentDetails shipment={selectedShipment}></ShipmentDetails>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold underline text-center m-10">
        Shipments
      </h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : shipments && shipments.length > 0 ? (
        <ShipmentsTable
          shipments={shipments}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onRowClick={handleRowClick}
        ></ShipmentsTable>
      ) : (
        <p>No shipments available.</p>
      )}
    </div>
  );
}

export default App;
