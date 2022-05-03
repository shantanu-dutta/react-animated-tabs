import React from 'react';
import { ReactComponent as Plane } from './assets/plane.svg';
import { ReactComponent as House } from './assets/house.svg';
import { ReactComponent as Calendar } from './assets/calendar.svg';
import { ReactComponent as Bag } from './assets/bag.svg';
import TabContent from './TabContent';

const tabs = [
  {
    title: 'Flights',
    id: 'flights',
    icon: <Plane />,
    color: '#5d5dff',
    content: TabContent,
  },
  {
    title: 'Hotels',
    id: 'hotels',
    icon: <House />,
    color: '#67bb67',
    content: TabContent,
  },
  {
    title: 'Reservations',
    id: 'reservations',
    icon: <Calendar />,
    color: '#63a7c7',
    content: TabContent,
  },
  {
    title: 'Offers',
    id: 'offers',
    icon: <Bag />,
    color: '#f56868',
    content: TabContent,
  },
];

export default tabs;
