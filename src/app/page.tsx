'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useMemo } from 'react';

const MOCK_MESSAGES = [
  "You have received 3500 RWF from Didier Nsengiyumva(*********640) on your mobile money account at 2025-05-14 08:58:17. Message from sender: . Your new balance: 3501 RWF. Financial Transaction Id: 20618287212.",
  "You have received 12000 RWF from Grace Uwase(*********123) on your mobile money account at 2025-05-14 09:35:00. Message from sender: . Your new balance: 12500 RWF. Financial Transaction Id: 20618287213.",
  "You have received 5400 RWF from Eric Mugisha(*********456) on your mobile money account at 2025-05-14 10:10:00. Message from sender: . Your new balance: 5800 RWF. Financial Transaction Id: 20618287214.",
  "You have received 8900 RWF from Alice Umutoni(*********789) on your mobile money account at 2025-05-14 10:47:00. Message from sender: . Your new balance: 9100 RWF. Financial Transaction Id: 20618287215.",
  "You have received 7500 RWF from Sandrine Ingabire(*********111) on your mobile money account at 2025-05-15 08:20:00. Message from sender: . Your new balance: 7700 RWF. Financial Transaction Id: 20618287216.",
  "You have received 4100 RWF from Jean Bosco(*********222) on your mobile money account at 2025-05-15 09:55:00. Message from sender: . Your new balance: 4500 RWF. Financial Transaction Id: 20618287217.",
  "You have received 6200 RWF from Diane Uwimana(*********333) on your mobile money account at 2025-05-15 11:30:00. Message from sender: . Your new balance: 6300 RWF. Financial Transaction Id: 20618287218.",
  "You have received 3000 RWF from Patrick Habimana(*********444) on your mobile money account at 2025-05-16 08:00:00. Message from sender: . Your new balance: 3200 RWF. Financial Transaction Id: 20618287219.",
  "You have received 9900 RWF from Kevin Niyonzima(*********555) on your mobile money account at 2025-05-16 09:30:00. Message from sender: . Your new balance: 10000 RWF. Financial Transaction Id: 20618287220.",
  "You have received 6700 RWF from Juvenal Nsengiyumva(*********666) on your mobile money account at 2025-05-16 11:10:00. Message from sender: . Your new balance: 6900 RWF. Financial Transaction Id: 20618287221.",
];




export default function Dashboard() {
  const transactions = useMemo(() => {
    return MOCK_MESSAGES.map((msg) => {
      const amount = parseInt(msg.match(/received (\d+) RWF/)?.[1] || '0', 10);
      const timestamp = msg.match(/at ([\d-]+) [\d:]+/)?.[1] || '';
      return { amount, date: timestamp };
    });
  }, []);

  const dailyTotals = useMemo(() => {
    const totals: Record<string, number> = {};
    for (const txn of transactions) {
      if (!totals[txn.date]) {
        totals[txn.date] = 0;
      }
      totals[txn.date] += txn.amount;
    }
    return Object.entries(totals).map(([date, total]) => ({ date, total }));
  }, [transactions]);

  return (
    <main className="px-8 max-w-7xl mx-auto">
      <h1 className="text-xl font-bold mb-6">Dashboard Overview</h1>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Daily Payments Received</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dailyTotals}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

// export default function Dashboard() {
//   return (
//     <div className="px-8 mx-auto max-w-7xl">
//       <h2 className=" text-2xl font-semibold mb-4 text-green-700">Dashboard</h2>
//       <p>Welcome to the Golf Course Finance Dashboard!</p>
//     </div>
//   );
// }
