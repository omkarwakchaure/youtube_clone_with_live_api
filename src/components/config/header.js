export const headerConfig = {
  brand: {
    title: 'MediaMixer',
    showMenuButton: true,
  },
  notifications: {
    enabled: true,
    showIndicator: true,
  },
  userMenu: {
    showProfile: true,
    showSettings: true,
    showLogout: true,
  },
};

export const userMenuConfig = {
  header: {
    showAvatar: true,
    showEmail: true,
    showRole: true,
  },
  items: [
    { key: 'profile', label: 'Profile', enabled: true },
    { key: 'settings', label: 'Settings', enabled: true },
  ],
  logout: {
    enabled: true,
    label: 'Logout',
  },
};