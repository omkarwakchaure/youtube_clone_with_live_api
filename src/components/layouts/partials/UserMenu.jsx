import { ArrowRightStartOnRectangleIcon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline';
import { createPortal } from 'react-dom';
import React from 'react';

const ICONS= {
  UserIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
};

const UserMenu = ({ user, config }) => {
  return createPortal(
    <div className="fixed right-6 top-16 w-56 bg-plain shadow-lg rounded-lg border border-border z-[9999]" onMouseDown={(e) => e.stopPropagation()}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          {config.header.showAvatar && (
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-plain text-sm font-medium">
                {user.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </span>
            </div>
          )}

          <div>
            <p className="text-sm font-semibold">{user.name}</p>

            {config.header.showEmail && <p className="text-xs text-text/70">{user.email}</p>}

            {config.header.showRole && <p className="text-xs text-text/60">{user.role?.name}</p>}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-2">
        {config.items.map(
          (item) =>
            item.enabled && (
              <button key={item.key} onClick={item.onClick} className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-background transition-colors">
                {item.icon &&
                  (() => {
                    const Icon = ICONS[item.icon];
                    return Icon ? <Icon className="w-4 h-4 text-text/70" /> : null;
                  })()}

                {item.label}
              </button>
            )
        )}
      </div>

      {/* Logout */}
      {config.logout.enabled && (
        <div className="border-t border-border py-2">
          <button onClick={config.logout.onClick} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-alert hover:bg-alert/5">
            {config.logout.icon &&
              (() => {
                const Icon = ICONS[config.logout.icon];
                return Icon ? <Icon className="w-4 h-4" /> : null;
              })()}

            {config.logout.label}
          </button>
        </div>
      )}
    </div>,
    document.body
  );
};

export default UserMenu;