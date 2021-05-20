import React, { FC, useEffect } from 'react';
import SearchInput from '@pluralsight/ps-design-system-searchinput';
import { css } from 'glamor';
import { GContainer } from '@app/@allevents/infra/glamor';
import Row from '@pluralsight/ps-design-system-row';
import { Label } from '@pluralsight/ps-design-system-text';
import Tag from '@pluralsight/ps-design-system-tag';
import Button from '@pluralsight/ps-design-system-button';
import useAsync from '@app/@allevents/infra/hooks/use-async';
import venueApi from '@app/venue/http';

const SearchResultRow: FC<{ venue: any }> = ({ venue }) => {
  return (
    <Row
      className={`${css({ paddingBottom: '1rem', paddingTop: '1rem' })}`}
      size={Row.sizes.medium}
      title={
        <Label
          size={Label.sizes.large}
          className={`${css({ fontWeight: '900' })}`}
        >
          {venue.venueName}
        </Label>
      }
      image={<Row.Image src={venue.media[0]} />}
    />
  );
};

async function getData(value: string) {
  const result = await venueApi.search({ query: value });
  if (result.isError) {
    throw result.getError();
  }
  return result.getValue().data;
}

export default function VenueSearch() {
  const [value, setValue] = React.useState('');
  const { isLoading, isSuccess, isIdle, data, run } = useAsync();

  const search = () => {
    if (value.length >= 3) {
      if (isLoading) return;
      run(getData(value));
    }
  };

  return (
    <div
      className={`${css({
        width: '100%',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
      })}`}
    >
      <div className={`${GContainer} ${css({ paddingTop: '2rem' })}`}>
        <SearchInput
          className={`${css({
            width: '100%',
          })}`}
          css
          onClear={() => setValue('')}
          placeholder="Search for venue"
          value={value}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            setValue(evt.target.value);
          }}
        />
        <Button onClick={search}>Search</Button>
        {/*Result list*/}
        <div
          className={`${css({
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '50vh',
            overflowY: 'scroll',
            marginTop: '2rem',
            padding: '1rem',
          })}`}
        >
          {isLoading && 'Loading'}
          {isSuccess &&
            data.map((venue: any) => <SearchResultRow venue={venue} />)}
          {isIdle && 'No Results'}
        </div>
      </div>
    </div>
  );
}
