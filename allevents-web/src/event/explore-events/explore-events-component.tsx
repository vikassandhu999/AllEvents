import React from 'react';
import { css } from 'glamor';
import Drawer from '@pluralsight/ps-design-system-drawer';
import { GContainer } from '@app/@allevents/infra/glamor';
import SearchInput from '@pluralsight/ps-design-system-searchinput';
import Button from '@pluralsight/ps-design-system-button';
import { Heading, Label } from '@pluralsight/ps-design-system-text';
import Row from '@pluralsight/ps-design-system-row';
import Tag from '@pluralsight/ps-design-system-tag';

const FILTER_DRAWERS = [
  {
    summary: 'Category',
  },
  {
    summary: 'Language',
  },
  {
    summary: 'Price',
  },
  {
    summary: 'Age Group',
  },
];

const ExploreEventComponent = () => {
  const renderDrawer = ({ summary }: any, index: number) => {
    return (
      <Drawer key={'drawer-' + index}>
        <Drawer.Summary css>
          <Label>{summary}</Label>
        </Drawer.Summary>
        <Drawer.Details css>
          <div style={{ height: 128 }} />
        </Drawer.Details>
      </Drawer>
    );
  };

  const filterBar = () => {
    return (
      <div
        className={`${css({
          width: '100%',
          maxWidth: '300px',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        })}`}
      >
        {FILTER_DRAWERS.map(renderDrawer)}
      </div>
    );
  };

  const renderResultRow = () => {
    return (
      <Row
        className={`${css({ paddingBottom: '1rem', paddingTop: '1rem' })}`}
        size={Row.sizes.medium}
        metadata1={[<Label size={Label.sizes.small}>by Abhinav Bassi</Label>]}
        //@ts-ignore
        metadata2={[
          <Tag
            className={`${css({ marginTop: '0rem' })}`}
            size={Tag.sizes.small}
          >
            Standup
          </Tag>,
          ,
          <Label size={Label.sizes.xSmall}>2h 20m</Label>,
          'Bishnoi Theatre Delhi',
        ]}
        title={
          <Label
            size={Label.sizes.large}
            className={`${css({ fontWeight: '900' })}`}
          >
            Kabhi hass bhi liya karo ft. Abhinav Bassi
          </Label>
        }
        image={
          <Row.Image src="https://pluralsight.imgix.net/course-images/angular-2-getting-started-update-v1.jpg" />
        }
      />
    );
  };

  return (
    <div
      className={`${css({
        width: '100%',
        minHeight: '100vh',
        display: 'block',
      })}`}
    >
      <div className={`${GContainer} ${css({ paddingTop: '2rem' })}`}>
        <Heading size={Heading.sizes.small}>
          <h2>Explore events</h2>
        </Heading>
        <div
          className={`${css({
            display: 'grid',
            gridGap: '1rem',
            gridTemplateColumns: '1fr 100px',
          })}`}
        >
          <SearchInput
            className={`${css({ width: '100%' })}`}
            css
            size={'medium'}
            placeholder="Searching for event"
          />
          <Button>Filter</Button>
        </div>
        <div
          className={`${css({
            display: 'grid',
            paddingTop: '3rem',
            gridTemplateColumns: '400px 1fr',
          })}`}
        >
          <div>{filterBar()}</div>
          <div>{Array(10).fill(0).map(renderResultRow)}</div>
        </div>
      </div>
    </div>
  );
};

export default ExploreEventComponent;
