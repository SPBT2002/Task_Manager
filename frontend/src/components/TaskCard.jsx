const STATUS_ORDER = ['Pending', 'In Progress', 'Completed'];

const statusStyles = {
  Pending: {
    badge: 'bg-orange-100 text-orange-600 border border-orange-200 hover:bg-orange-200',
    dot: 'bg-orange-500',
    card: 'bg-white',
  },
  'In Progress': {
    badge: 'bg-blue-100 text-blue-600 border border-blue-200 hover:bg-blue-200',
    dot: 'bg-blue-500',
    card: 'bg-blue-50/60',
  },
  Completed: {
    badge: 'bg-green-100 text-green-600 border border-green-200 hover:bg-green-200',
    dot: 'bg-green-500',
    card: 'bg-green-50/60',
  },
};

const formatDate = (isoStr) => {
  const d = new Date(isoStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
};

export default function TaskCard({ task, onStatusChange, onEdit, onDelete }) {
  const styles = statusStyles[task.status];

  const cycleStatus = () => {
    const idx = STATUS_ORDER.indexOf(task.status);
    const next = STATUS_ORDER[(idx + 1) % STATUS_ORDER.length];
    onStatusChange(task.id, next);
  };

  return (
    <div
      className={`group relative rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-250 px-5 py-4 ${styles.card}`}
    >
      <div className="flex items-start justify-between gap-3">
        {/* Left: content */}
        <div className="flex-1 min-w-0">
          <h3 className={`text-base font-semibold text-gray-900 truncate transition-all duration-200`}>
            {task.title}
          </h3>
          {task.description && (
            <p className={`text-sm text-gray-500 mt-1 line-clamp-2 transition-opacity duration-200 ${task.status === 'Completed' ? 'opacity-40' : ''}`}>
              {task.description}
            </p>
          )}
          {/* Date */}
          <div className="flex items-center gap-4 mt-3">
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {formatDate(task.createdAt)}
            </span>
          </div>
        </div>

        {/* Right: Status badge + Edit/Delete */}
        <div className="flex flex-col items-end gap-2">
          <button
            onClick={cycleStatus}
            title="Click to change status"
            className={`mb-2 shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer select-none ${styles.badge}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`}></span>
            {task.status}
          </button>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => onEdit(task)}
              className="flex items-center gap-1 px-2.5 py-1 h-7 rounded-lg border border-indigo-200 text-indigo-600 text-xs font-medium bg-white hover:bg-indigo-50 transition-colors duration-150 shadow-sm"
            >
              <span className="text-blue-500">🖉</span> Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="flex items-center gap-1 px-2.5 py-1 h-7 rounded-lg border border-red-200 text-red-500 text-xs font-medium bg-white hover:bg-red-50 transition-colors duration-150 shadow-sm"
            >
              <span className="text-red-500 text-base">🗑</span> Delete
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
