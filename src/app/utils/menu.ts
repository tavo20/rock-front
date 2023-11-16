import { NbMenuItem } from '@nebular/theme';

export let menu: NbMenuItem[] = [
  {
    title: 'Sensores',
    icon: 'people-outline',
    link: '/sensors/home-sensors',
  },
  {
    title: 'Statistics',
    icon: 'monitor-outline',
    link: '/statistics/home-statistics',
    home: true,
  },
  {
    title: 'Sing Out',
    icon: 'close-square-outline',
    link: '/auth/logout',
  },
];
