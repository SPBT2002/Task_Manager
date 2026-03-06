import { useState, useEffect } from 'react';
import HeaderSection from '../components/HeaderSection';
import StatsCards from '../components/StatsCards';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import taskService from '../services/taskService';

function ConfirmModal({ open, title, onConfirm, onCancel }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade-in">
        <div className="px-6 pt-6 pb-2">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Delete Task</h2>
          <p className="text-gray-600 text-sm mb-4">Are you sure you want to delete <span className="font-semibold text-gray-900">"{title}"</span>?</p>
        </div>
        <div className="flex gap-3 px-6 pb-6">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors duration-150"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-red-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await taskService.getTasks();
      setTasks(data.data || []);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  const completedCount = tasks.filter(t => t.status === 'Completed').length;
  const pendingCount = tasks.filter(t => t.status === 'Pending').length;

  const handleAddNew = () => {
    setEditTask(null);
    setShowForm(true);
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setShowForm(true);
  };

  const handleSave = async (formData) => {
    try {
      if (editTask) {
        // Update existing task
        await taskService.updateTask(editTask._id, formData);
      } else {
        // Create new task
        await taskService.createTask(formData);
      }
      // Refresh tasks after save
      await fetchTasks();
    } catch (err) {
      console.error('Error saving task:', err);
      alert('Failed to save task');
    }
  };

  const handleDelete = (id) => {
    setDeleteId(id);
  };

  const confirmDelete = async () => {
    try {
      await taskService.deleteTask(deleteId);
      setDeleteId(null);
      // Refresh tasks after delete
      await fetchTasks();
    } catch (err) {
      console.error('Error deleting task:', err);
      alert('Failed to delete task');
    }
  };

  const cancelDelete = () => {
    setDeleteId(null);
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await taskService.updateTask(id, { status: newStatus });
      // Refresh tasks after status change
      await fetchTasks();
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update status');
    }
  };

  const deleteTask = tasks.find(t => t._id === deleteId);

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-100 via-purple-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-3"></div>
          <p className="text-gray-600 font-medium">Loading tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-purple-50 to-indigo-100">
      <HeaderSection />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Page Title Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">My Tasks</h1>
          </div>
          <button
            onClick={handleAddNew}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-indigo-300 transition-all duration-200 self-start sm:self-auto"
          >
            <span className="text-lg leading-none">+</span>
            New Task
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex items-center gap-3">
            <span className="text-red-500">⚠️</span>
            <p className="text-sm text-red-600 font-medium">{error}</p>
          </div>
        )}

        {/* Stats */}
        <div className="mb-6">
          <StatsCards tasks={tasks} />
        </div>

        {/* Task List with filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white shadow-sm p-4 sm:p-6">
          <TaskList
            tasks={[...tasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))}
            onStatusChange={handleStatusChange}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </main>

      {/* Task Form Modal */}
      {showForm && (
        <TaskForm
          onClose={() => setShowForm(false)}
          onSave={handleSave}
          editTask={editTask}
        />
      )}

      {/* Delete Confirm Modal */}
      <ConfirmModal
        open={!!deleteId}
        title={deleteTask?.title || ''}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}
