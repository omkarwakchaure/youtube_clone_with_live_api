export const SIDEBAR_CONFIG = [
  {
    id: 'home',
    label: 'Home',
    icon: 'HomeIcon',
    path: '/',
  },
  {
    id: 'shorts',
    label: 'Shorts',
    icon: 'BoltIcon',
    path: '/shorts',
  },
  {
    id: 'library',
    section: 'You',
    children: [
      {
        id: 'watch-later',
        label: 'Watch Later',
        icon: 'ClockIcon',
        path: '/watch-later',
      },
    ],
  },

  {
    id: 'explore',
    section: 'Explore',
    children: [
      {
        id: 'music',
        label: 'Music',
        icon: 'MusicalNoteIcon',
        path: '/category/music',
      },
      {
        id: 'gaming',
        label: 'Gaming',
        icon: 'PuzzlePieceIcon',
        path: '/category/gaming',
      },
      {
        id: 'sports',
        label: 'Sports',
        icon: 'TrophyIcon',
        path: '/category/sports',
      },
      {
        id: 'movies',
        label: 'Movies',
        icon: 'FilmIcon',
        path: '/category/movies',
      },
      {
        id: 'live',
        label: 'Live',
        icon: 'SignalIcon',
        path: '/category/live',
      },
    ],
  },
];
