import React from "react";

const ShipmentsTable = ({ shipments, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Order No.</th>
          <th>Delivery Date</th>
          <th>Customer</th>
          <th>Tracking No.</th>
          <th>Status</th>
          <th>Consignee</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {shipments.map((shipments, index) => {
          <tr key={index}>
            <td>{shipments.orderNo}</td>
            <td>{shipment.deliveryDate}</td>
            <td>{shipment.customer}</td>
            <td>{shipment.trackingNo}</td>
            <td>{shipment.status}</td>
            <td>{shipment.consignee}</td>
            <td>
              <button onClick={() => onEdit(shipment)}>Edit</button>
              <button onClick={() => onDelete(shipment.id)}>Delete</button>
            </td>
          </tr>;
        })}
      </tbody>
    </table>
  );
};

export default ShipmentsTable;
