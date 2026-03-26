import { Bars3Icon, BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import UserMenu from './UserMenu';

const HeaderLayout = ({ user, userMenuConfig, headerConfig, isAuthenticated = true, onToggleMenu , children}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);

  const notificationRef = useRef<HTMLDivElement | null>(null);
  const userRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!userRef.current) return;

      if (!userRef.current.contains(event.target)) {
        setShowUserPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full min-h-16 bg-plain shadow flex items-center px-4 sm:px-6 py-2">
      {/* LEFT */}
      <div className="flex items-center">
        {headerConfig.brand.showMenuButton && (
          <div className="md:hidden">
            <button onClick={onToggleMenu} className="p-2 rounded-lg hover:bg-background transition-colors cursor-pointer" aria-label="Toggle menu">
              <Bars3Icon className="w-6 h-6 text-text" />
            </button>
          </div>
        )}

        <h1 className="ml-3 text-lg font-bold text-text">{headerConfig.brand.title}</h1>
      </div>

      {/* PUSH RIGHT */}
      <div className='flex-1 flex justify-center'>
        {children}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        {/* Notifications */}
        {headerConfig.notifications.enabled && (
          <div ref={notificationRef} className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-text p-2 rounded-md hover:bg-background transition-colors relative"
              aria-label="Notifications"
            >
              <BellIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              {headerConfig.notifications.showIndicator && <span className="absolute -top-1 -right-1 w-2 h-2 bg-alert rounded-full" />}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-plain shadow-lg rounded-md text-text z-50 border border-border">
                <div className="p-4 border-b border-border">
                  <h3 className="text-sm font-semibold">Notifications</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-stone-600">No new notifications</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* User Menu */}
        <div className="relative" ref={userRef}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowUserPopup((prev) => !prev);
            }}
            className="text-text p-2 rounded-md hover:bg-background transition-colors"
            aria-label="User profile"
          >
            <UserCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {isAuthenticated && user && showUserPopup && <UserMenu user={user} config={userMenuConfig} />}
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;