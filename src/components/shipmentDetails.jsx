import React, { useEffect } from "react";

const ShipmentDetails = (selectedShipment) => {
  useEffect(() => {
    console.log("selectedShipment", selectedShipment);
  }, [selectedShipment]);
  return (
    <div className="grid grid-cols-2 gap-4 p-4 m-auto">
      <div class="flex flex-col" style={{ gap: "10px" }}>
        <strong>Order No.</strong>
        <div className="bg-gray-300 p-4 rounded">
          {selectedShipment.shipment.orderNo}
        </div>
      </div>
      <div class="flex flex-col" style={{ gap: "10px" }}>
        <strong>Delivery Date</strong>
        <div className="bg-gray-300 p-4 rounded">
          {selectedShipment.shipment.date}
        </div>
      </div>
      <div class="flex flex-col" style={{ gap: "10px" }}>
        <strong>Customer</strong>
        <div className="bg-gray-300 p-4 rounded">
          {selectedShipment.shipment.customer}
        </div>
      </div>
      <div class="flex flex-col" style={{ gap: "10px" }}>
        <strong>Tracking No.</strong>
        <div className="bg-gray-300 p-4 rounded">
          {selectedShipment.shipment.trackingNo}
        </div>
      </div>
      <div class="flex flex-col" style={{ gap: "10px" }}>
        <strong>Status</strong>
        <div className="bg-gray-300 p-4 rounded">
          {selectedShipment.shipment.status}
        </div>
      </div>
      <div class="flex flex-col" style={{ gap: "10px" }}>
        <strong>Consignee</strong>
        <div className="bg-gray-300 p-4 rounded">
          {selectedShipment.shipment.consignee}
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;
