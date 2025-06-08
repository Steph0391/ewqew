import { useState } from 'react';

const packages = [
  { amount: 100, price: 13000 },
  { amount: 400, price: 52000 },
  { amount: 800, price: 104000 },
];

export default function Order() {
  const [username, setUsername] = useState('');
  const [selected, setSelected] = useState(packages[0]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
      <div className="bg-white rounded-xl shadow p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Beli Robux</h2>
        <label className="block mb-2 font-semibold">Roblox Username</label>
        <input
          className="w-full border rounded px-3 py-2 mb-4"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Masukkan username Roblox"
        />
        <label className="block mb-2 font-semibold">Pilih Paket Robux</label>
        <select
          className="w-full border rounded px-3 py-2 mb-6"
          value={selected.amount}
          onChange={e => setSelected(packages.find(p => p.amount == e.target.value))}
        >
          {packages.map(p => (
            <option key={p.amount} value={p.amount}>{p.amount} Robux - Rp{p.price.toLocaleString()}</option>
          ))}
        </select>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded font-bold transition">Lanjutkan</button>
      </div>
    </div>
  );
} 