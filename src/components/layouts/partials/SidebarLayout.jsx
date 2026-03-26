import {
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  BuildingOfficeIcon,
  ChevronDownIcon,
  ClockIcon,
  HomeIcon,
  ListBulletIcon,
  MapPinIcon,
  PlusIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
  UserPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {  useState } from 'react';

const ICON_MAP = {
  HomeIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  PlusIcon,
  ListBulletIcon,
  MapPinIcon,
  Squares2X2Icon,
  ShieldCheckIcon,
  UserPlusIcon,
  ClockIcon,
};

const SidebarLayout = ({
  menuConfig,
  pathname,
  isSidebarCollapsed,
  isMobileMenuOpen,
  onNavigate,
  onToggleSidebar,
  onCloseMobileMenu,
  onLogout,
}) => {

  const [expanded, setExpanded] = useState>({});

  return (
    <>
      <div
        className={`fixed left-0 top-0 h-screen bg-plain border-r border-border transition-all duration-300 z-30 flex flex-col ${
          isMobileMenuOpen ? 'flex w-full md:hidden' : 'hidden'
        } ${!isMobileMenuOpen && isSidebarCollapsed ? 'md:flex md:w-16' : ''} ${!isMobileMenuOpen && !isSidebarCollapsed ? 'md:flex md:w-64' : ''}`}
      >
        {/* Header */}
        <div className="flex items-center justify-end p-3.5 border-b border-border">
          {/* {!isSidebarCollapsed && <h1 className="text-xl font-bold text-text hidden md:block">AssetNova</h1>} */}

          {/* Mobile: Always show title */}
          {/* <h1 className="text-xl font-bold text-text md:hidden">AssetNova</h1> */}

          {/* Desktop: Toggle button */}
          <button onClick={onToggleSidebar} className="p-2 rounded-lg hover:bg-background transition-colors hidden md:block cursor-pointer">
            <Bars3Icon className="w-5 h-5 text-text" />
          </button>

          {/* Mobile: Close button */}
          <button onClick={onCloseMobileMenu}
            className="p-2 rounded-lg hover:bg-background transition-colors cursor-pointer md:hidden"
            aria-label="Close Menu"
          >
            <XMarkIcon className="w-6 h-6 text-text" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {menuConfig.map((item) => {
              const Icon = ICON_MAP[item.icon];
              const isOpen = expanded[item.id];
              const isActiveItem = item.path && pathname === item.path;

              if (!item.children) {
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.path) {
                       onNavigate(item.path);
                        onCloseMobileMenu();
                      }

                      onCloseMobileMenu();
                    }}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors group cursor-pointer ${
                      isSidebarCollapsed ? 'justify-center' : 'space-x-3'
                    } ${isActiveItem ? 'text-primary font-medium' : 'hover:bg-background text-text/90 font-medium'}`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {(!isSidebarCollapsed || isMobileMenuOpen) && <span>{item.label}</span>}
                  </button>
                );
              }

              return (
                <div key={item.id}>
                  <button
                    onClick={() => setExpanded((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors group cursor-pointer ${
                      isSidebarCollapsed ? 'justify-center' : 'justify-between'
                    } hover:bg-background`}
                  >
                    <div className={`flex items-center ${isSidebarCollapsed ? '' : 'space-x-3'}`}>
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      {(!isSidebarCollapsed || isMobileMenuOpen) && <span className="font-medium">{item.label}</span>}
                    </div>

                    {(!isSidebarCollapsed || isMobileMenuOpen) && <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
                  </button>

                  {isOpen && (!isSidebarCollapsed || isMobileMenuOpen) && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.children.map((child) => {
                        const ChildIcon = child.icon ? ICON_MAP[child.icon] : null;

                        return (
                          <button
                            key={child.path}
                            onClick={() => {
                              onNavigate(child.path);
                              onCloseMobileMenu();
                            }}
                            className={`w-full flex items-center gap-3 p-2 rounded-lg text-sm transition-colors ${
                              pathname === child.path ? 'bg-background/70 text-primary' : 'hover:bg-background'
                            }`}
                          >
                            {ChildIcon && <ChildIcon className="w-4 h-4 text-text/60" />}
                            <span>{child.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Logout Button (sticky at bottom) */}
        <div className="mt-auto p-4 border-t border-border">
          <button
            type="button"
            className={`w-full flex items-center p-3 rounded-lg hover:bg-alert/5 hover:text-alert transition-colors relative group cursor-pointer ${
              isSidebarCollapsed ? 'justify-center' : 'space-x-3'
            }`}
            onClick={onLogout}  
          >
            <ArrowRightStartOnRectangleIcon className="text-text/80 group-hover:text-alert w-6 h-6 flex-shrink-0" />
            {(!isSidebarCollapsed || isMobileMenuOpen) && <span className="text-text/90 group-hover:text-alert font-medium">Logout</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;