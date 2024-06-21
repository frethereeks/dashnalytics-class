import React from 'react';
import { IoTrashBinSharp } from "react-icons/io5";
import { shipmentData } from '../data/shipmentData'; 

export default function Shipments() {
  return (
    <main className="flex flex-col gap-4 py-10 px-4 bg-primary">
      <div className="overflow-x-scroll w-full p-4 rounded-md shadow-lg bg-white text-slate-600">
        <table className="w-full min-w-[50rem]">
          <thead>
            <tr>
              <th colSpan={6}>
                <h3 className="text-lg md:text-2xl font-bold text-left">Shipment List</h3>
              </th>
            </tr>
            <tr className='border-b border-slate-200 opacity-70'>
              <th className='px-1'>#</th>
              <th className='py-2 text-left'>Shipment ID</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-500 text-center">
            {
              shipmentData.length ?
                shipmentData.map((shipment, i) => (
                  <tr key={shipment.id}>
                    <td>{i + 1}</td>
                    <td>
                      <div className="flex items-center gap-2 p-1 flex-1">
                        <h3 className="text-base md:text-lg font-medium text-left">{shipment.shipmentId}</h3>
                      </div>
                    </td>
                    <td>{shipment.customerName}</td>
                    <td>{shipment.address}</td>
                    <td><div className={`p-1 px-4 ${shipment.status === 'Delivered' ? 'bg-green-500' : 'bg-slate-400'} text-white text-sm w-max mx-auto rounded-sm`}>{shipment.status}</div></td>
                    <td><div className="p-1 px-4 bg-[#f66] text-white text-sm w-max mx-auto rounded-sm"><IoTrashBinSharp /></div></td>
                  </tr>
                ))
                :
                <tr>
                  <td colSpan={6} className="text-center text-dark/80 py-6">No Shipment(s) Found</td>
                </tr>
            }
          </tbody>
        </table>
      </div>
    </main>
  );
}
