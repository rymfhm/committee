import CommitteeList from '../components/CommitteeList';
import AIChatWidget from '../components/AIChatWidget';

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">My Committees</h1>
      <CommitteeList />
      <AIChatWidget />
    </div>
  );
}


