import React from 'react';
import { css } from 'glamor';
import { PlusIcon, UserAddIcon } from '@pluralsight/ps-design-system-icon';
import { colorsBackgroundLight } from '@pluralsight/ps-design-system-core';
import SearchInput from '@pluralsight/ps-design-system-searchinput';
import { GContainer } from '@app/@allevents/infra/glamor';
import { Heading, Label } from '@pluralsight/ps-design-system-text';
import NavUser from '@pluralsight/ps-design-system-navuser';
import NavCookieBanner from '@pluralsight/ps-design-system-navcookiebanner';
import Button from '@pluralsight/ps-design-system-button';
import { useAuth } from '@app/auth/provider/auth-provider';

function Header() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div
      className={`${css({
        display: 'flex',
        margin: 0,
        position: 'sticky',
        top: 0,
        zIndex: 111,
        padding: 0,
        minHeight: '60px',
        backgroundColor: colorsBackgroundLight[2],
      })}`}
    >
      <NavCookieBanner message={'We use cookies'} />
      <div
        className={`${GContainer} ${css({
          display: 'flex',
          height: '100%',
          padding: '0 0.5rem',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'space-between',
        })}`}
      >
        <Heading
          size={Heading.sizes.small}
          className={`${css({
            margin: '0px',
            padding: '0px',
            fontWeight: '900',
          })}`}
        >
          <h2>AllEvents</h2>
        </Heading>
        <SearchInput
          className={`${css({ maxWidth: '600px', width: '100%' })}`}
          css
          size={'medium'}
          placeholder="Searching for event"
        />
        {isAuthenticated ? (
          <div
            className={`${css({
              display: 'flex',
              height: '100%',
            })}`}
          >
            <Button icon={<PlusIcon />} appearance={Button.appearances.stroke}>
              Create Event
            </Button>
            <NavUser
              className={`${css({
                backgroundColor: colorsBackgroundLight[1],
                marginLeft: '1rem',
                cursor: 'pointer',
              })}`}
              name={<Label size={Label.sizes.medium}>{user.firstName}</Label>}
              src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
            />
          </div>
        ) : (
          <div
            className={`${css({
              display: 'flex',
              height: '100%',
            })}`}
          >
            <Button icon={<UserAddIcon />} appearance={Button.appearances.flat}>
              Signup or Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
