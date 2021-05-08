import React from 'react';
import { css } from 'glamor';
import Tag from '@pluralsight/ps-design-system-tag';
import Card from '@pluralsight/ps-design-system-card';
import { Link } from 'react-router-dom';

function EventCard() {
  return (
    <Link to={'/event/book'}>
      <Card
        metadata1={['2h 20m', 'PVR Jalandhar']}
        metadata2={[
          <Tag
            className={`${css({ marginTop: '0.5rem' })}`}
            size={Tag.sizes.small}
          >
            Education
          </Tag>,
          'July 24, 1847',
        ]}
        title={<Card.Title>Card with Two Lines of Meta</Card.Title>}
        image={<Card.Image src="https://picsum.photos/seed/picsum/540/360" />}
      />
    </Link>
  );
}

export default EventCard;
