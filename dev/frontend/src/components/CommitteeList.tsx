import { useEffect, useState } from 'react';
import api from '../api/axios';

export default function CommitteeList() {
  const [committees, setCommittees] = useState<any[]>([]);

  useEffect(() => {
    api.get('/committees').then(res => setCommittees(res.data));
  }, []);

  return (
    <div className="grid gap-4">
      {committees.map(c => (
        <div key={c._id} className="border p-4 rounded shadow-sm">
          <h2 className="font-semibold">{c.name}</h2>
          <p>{c.members.length} members</p>
          <p>
            {c.monthlyAmount.toLocaleString()} PKR / {c.duration} months
          </p>
        </div>
      ))}
    </div>
  );
}


