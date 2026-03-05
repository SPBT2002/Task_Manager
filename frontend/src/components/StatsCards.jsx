const statConfig = [
  {
    key: 'total',
    label: 'Total',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    key: 'pending',
    label: 'Pending',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    key: 'inprogress',
    label: 'In Progress',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    key: 'completed',
    label: 'Completed',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
];

export default function StatsCards({ tasks }) {
  const counts = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'Pending').length,
    inprogress: tasks.filter(t => t.status === 'In Progress').length,
    completed: tasks.filter(t => t.status === 'Completed').length,
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {statConfig.map(({ key, label, color, bg, border, icon }) => (
        <div
          key={key}
          className={`${bg} border ${border} rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-200`}
        >
          <div className={`${color} mb-3`}>{icon}</div>
          <p className="text-xs sm:text-xl text-gray-500 font-medium">{label}</p>
          <p className={`text-2xl sm:text-3xl font-bold mt-1 ${color}`}>{counts[key]}</p>
        </div>
      ))}
    </div>
  );
}
