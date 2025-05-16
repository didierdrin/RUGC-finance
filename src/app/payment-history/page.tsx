'use client';

import { useState } from 'react';

export default function PaymentHistory() {
  const messages = MOCK_MESSAGES; 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(messages.length / itemsPerPage);
  const currentMessages = messages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const parseTransaction = (msg: string) => {
    return {
      amount: msg.match(/received (\d+) RWF/)?.[1] || '',
      name: msg.match(/from ([\w\s]+)\(/)?.[1] || '',
      phone: msg.match(/\*+(\d{3})\)/)?.[1] || '',
      timestamp: msg.match(/at ([\d-]+ [\d:]+)/)?.[1] || '',
      newBalance: msg.match(/new balance: (\d+) RWF/)?.[1] || '',
      transactionId: msg.match(/Id: (\d+)/)?.[1] || '',
    };
  };

  return (
    <div className="px-10 pb-16 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Payments</h2>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricBox label="Rent received" value="14500 RWF" subtitle="Today" />
        <MetricBox label="Upcoming payments" value="2,450 RWF" subtitle="This month" />
        <MetricBox label="Rent overdue" value="1,450 RWF" subtitle="5 Overdue" />
        <MetricBox label="Total expense" value="2,450 RWF" subtitle="Last 30 days" />
      </div>

      {/* Transactions */}
      <div className="bg-white shadow rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Recent Transactions</h3>
          <button className="text-sm bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200">
            Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left bg-gray-100">
              <tr>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Phone (last 3)</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">New Balance</th>
                <th className="px-4 py-2">Timestamp</th>
                <th className="px-4 py-2">Txn ID</th>
              </tr>
            </thead>
            <tbody>
              {currentMessages.map((msg, idx) => {
                const txn = parseTransaction(msg);
                return (
                  <tr key={idx} className="border-b border-slate-300 hover:bg-gray-50">
                    <td className="px-4 py-2">{txn.name}</td>
                    <td className="px-4 py-2">{txn.phone}</td>
                    <td className="px-4 py-2">{txn.amount} RWF</td>
                    <td className="px-4 py-2">{txn.newBalance} RWF</td>
                    <td className="px-4 py-2">{txn.timestamp}</td>
                    <td className="px-4 py-2">{txn.transactionId}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-green-100 hover:bg-green-200 disabled:opacity-50"
          >
            Previous
          </button>
          <div className="text-sm text-gray-600 pt-1">Page {currentPage} of {totalPages}</div>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-green-100 hover:bg-green-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function MetricBox({ label, value, subtitle }: { label: string; value: string; subtitle: string }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-300">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs text-gray-400">{subtitle}</div>
    </div>
  );
}

const MOCK_MESSAGES: string[] = [
  "You have received 3500 RWF from Didier Nsengiyumva(*********640) on your mobile money account at 2025-05-14 08:58:17. Message from sender: . Your new balance: 3501 RWF. Financial Transaction Id: 20618287212.",
  "You have received 12000 RWF from Grace Uwase(*********123) on your mobile money account at 2025-05-14 09:35:00. Message from sender: . Your new balance: 12500 RWF. Financial Transaction Id: 20618287213.",
  "You have received 5400 RWF from Eric Mugisha(*********456) on your mobile money account at 2025-05-14 10:10:00. Message from sender: . Your new balance: 5800 RWF. Financial Transaction Id: 20618287214.",
  "You have received 8900 RWF from Alice Umutoni(*********789) on your mobile money account at 2025-05-14 10:47:00. Message from sender: . Your new balance: 9100 RWF. Financial Transaction Id: 20618287215.",
  "You have received 7500 RWF from Sandrine Ingabire(*********111) on your mobile money account at 2025-05-14 11:20:00. Message from sender: . Your new balance: 7700 RWF. Financial Transaction Id: 20618287216.",
  "You have received 4100 RWF from Jean Bosco(*********222) on your mobile money account at 2025-05-14 11:55:00. Message from sender: . Your new balance: 4500 RWF. Financial Transaction Id: 20618287217.",
  "You have received 6200 RWF from Diane Uwimana(*********333) on your mobile money account at 2025-05-14 12:30:00. Message from sender: . Your new balance: 6300 RWF. Financial Transaction Id: 20618287218.",
  "You have received 3000 RWF from Patrick Habimana(*********444) on your mobile money account at 2025-05-14 13:00:00. Message from sender: . Your new balance: 3200 RWF. Financial Transaction Id: 20618287219.",
  "You have received 9900 RWF from Kevin Niyonzima(*********555) on your mobile money account at 2025-05-14 13:35:00. Message from sender: . Your new balance: 10000 RWF. Financial Transaction Id: 20618287220.",
  "You have received 6700 RWF from Niyo Nsengiyumva(*********667) on your mobile money account at 2025-05-14 14:10:00. Message from sender: . Your new balance: 6900 RWF. Financial Transaction Id: 20618287221.",
  // Add 20 more entries similarly to reach 30 for full pagination...
  // For brevity, I’m omitting them here but can generate the rest if needed.
];
