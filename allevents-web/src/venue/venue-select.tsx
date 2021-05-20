import Button from '@pluralsight/ps-design-system-button';
import {
  colorsBackgroundLight,
  layout,
} from '@pluralsight/ps-design-system-core';
import Dialog from '@pluralsight/ps-design-system-dialog';
import { Heading } from '@pluralsight/ps-design-system-text';
import React from 'react';
import VenueSearch from '@app/venue/venue-search';

function VenueSelect() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <div className="app" aria-hidden={isOpen}>
        <Button onClick={() => setOpen(!isOpen)}>Open Modal</Button>
      </div>
      {isOpen && (
        <Dialog
          modal
          onClose={() => setOpen(false)}
          aria-label="Select venue"
          style={{ zIndex: 1 }}
        >
          <Heading>
            <h3>Select Venue</h3>
          </Heading>
          <VenueSearch />
        </Dialog>
      )}
    </>
  );
}

export default VenueSelect;
