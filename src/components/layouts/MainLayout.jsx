import React from 'react';
import { Outlet } from 'react-router';
import HeaderLayout from './partials/HeaderLayout';
import SearchBar from '../innerpages/searchPart/SearchBar';
import { useSelector } from 'react-redux';
import SidebarLayout from './partials/SidebarLayout';
import { SIDEBAR_CONFIG } from '../config/sidebar';
import { headerConfig, userMenuConfig } from '../config/header';

const MainLayout = () => {

const { isSidebarCollapsed } = useSelector((state) => state.sidebar);
 
 return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Side Panel */}
      <SidebarLayout menuConfig={SIDEBAR_CONFIG} />

      {/* Main Content */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'md:ml-16' : 'md:ml-64'} ml-0`}>
        <HeaderLayout userMenuConfig={userMenuConfig} headerConfig={headerConfig}>
            <SearchBar/>
        </HeaderLayout>

         {/* Page Content */}
        <main className="p-2 sm:p-4 flex-1 overflow-y-auto">
          <div className="bg-plain rounded-md shadow-md p-6 max-w-full">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
};

export default MainLayout;
