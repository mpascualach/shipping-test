import React from "react";

const ShipmentsTable = ({ shipments, onEdit, onDelete, onRowClick }) => {
  return (
    <table className="table-fixed m-1 border-collapse">
      <thead className="bg-gray-100">
        <tr className="rounded-t" style={{ borderBottom: "2px solid #F3F5F6" }}>
          <th className="p-4 text-left whitespace-nowrap">Order No.</th>
          <th className="p-4 text-left whitespace-nowrap">Delivery Date</th>
          <th className="p-4 text-left whitespace-nowrap">Customer</th>
          <th className="p-4 text-left whitespace-nowrap">Tracking No.</th>
          <th className="p-4 text-left whitespace-nowrap">Status</th>
          <th className="p-4 text-left whitespace-nowrap">Consignee</th>
          <th className="p-4 text-left whitespace-nowrap"></th>
        </tr>
      </thead>
      <tbody>
        {shipments.map((shipment, index) => (
          <tr
            key={index}
            className="hover:bg-gray-200 cursor-pointer bg-white"
            style={{ borderBottom: "2px solid #F3F5F6" }}
            onClick={() => onRowClick(shipment)}
          >
            <td className="p-4">{shipment.orderNo}</td>
            <td className="p-4">{shipment.date}</td>
            <td className="p-4">{shipment.customer}</td>
            <td className="p-4">{shipment.trackingNo}</td>
            <td className="p-4">{shipment.status}</td>
            <td className="p-4">{shipment.consignee}</td>
            <td className="p-4">
              <div className="flex" style={{ gap: "20px" }}>
                <button
                  onClick={() => onEdit(shipment)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(shipment.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShipmentsTable;
