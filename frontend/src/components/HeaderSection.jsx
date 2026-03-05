import { useNavigate } from 'react-router-dom';

export default function HeaderSection() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('tf_user') || '{"initials":"JD","name":"John Doe"}');

  const handleLogout = () => {
    localStorage.removeItem('tf_user');
    navigate('/');
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-3xl font-bold text-gray-800 tracking-tight">
            Task<span className="text-indigo-600">Flow</span>
          </span>
        </div>

        {/* Avatar & Logout */}
        <div className="relative group">
          <button className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow hover:shadow-indigo-300 hover:bg-indigo-700 transition-all duration-200 cursor-pointer">
            {user.initials}
          </button>
          {/* Dropdown */}
          <div className="absolute right-0 top-11 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-400 truncate">{user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors duration-150"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
