import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarCollapsed: false,
  isMobileMenuOpen: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarCollapsed = !state.isSidebarCollapsed;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
  },
});

export const { toggleSidebar, toggleMobileMenu, closeMobileMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
