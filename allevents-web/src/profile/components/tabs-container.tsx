import Tab from '@pluralsight/ps-design-system-tab';
import React from 'react';
import Bookings from '@app/profile/components/bookings';
import Payments from '@app/profile/components/payments';
import Favorites from '@app/profile/components/favorites';
import Notifications from '@app/profile/components/Notifications';

const MENUS = [
  { id: 3, label: 'Notifications', content: Notifications },
  { id: 0, label: 'Bookings', content: Bookings },
  { id: 1, label: 'Favorites', content: Favorites },
  { id: 2, label: 'Payments', content: Payments },
];

function ProfileTabsContainer() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div>
      <Tab.List>
        {MENUS.map((menu, i) => (
          <Tab.ListItem
            id={menu.id}
            key={menu.id}
            onClick={() => setActiveIndex(i)}
            {...(i === activeIndex ? { active: true } : null)}
          >
            {menu.label}
          </Tab.ListItem>
        ))}
      </Tab.List>
      {MENUS.map((menu, i) =>
        i === activeIndex ? (
          <Tab.Panel labelledBy={menu.id} key={menu.id}>
            {<menu.content />}
          </Tab.Panel>
        ) : null,
      )}
    </div>
  );
}

export default ProfileTabsContainer;
