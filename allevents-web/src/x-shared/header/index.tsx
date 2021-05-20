import React, { useMemo } from 'react';
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
import { Link, useHistory, useLocation } from 'react-router-dom';

function Header() {
  const { isAuthenticated, user } = useAuth();
  const { pathname } = useLocation();

  const showSearchInput = useMemo(() => pathname !== '/event/explore', [
    pathname,
  ]);

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
      {/*<NavCookieBanner message={'We use cookies'} />*/}
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
        <Link to={'/'}>
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
        </Link>
        {showSearchInput && (
          <Link to={'/event/explore'}>
            <SearchInput
              className={`${css({ maxWidth: '600px', width: '100%' })}`}
              css
              size={'medium'}
              placeholder="Searching for event"
            />
          </Link>
        )}

        {isAuthenticated ? (
          <div
            className={`${css({
              display: 'flex',
              height: '100%',
            })}`}
          >
            <Link to={'/event/create'}>
              <Button
                icon={<PlusIcon />}
                appearance={Button.appearances.stroke}
              >
                Create Event
              </Button>
            </Link>
            <Link to={'/me'}>
              <NavUser
                className={`${css({
                  backgroundColor: colorsBackgroundLight[1],
                  marginLeft: '1rem',
                  cursor: 'pointer',
                })}`}
                name={() => (
                  <Label size={Label.sizes.medium}>{user.firstName}</Label>
                )}
                src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
              />
            </Link>
          </div>
        ) : (
          <div
            className={`${css({
              display: 'flex',
              height: '100%',
            })}`}
          >
            <Link to={'/auth'}>
              <Button
                icon={<UserAddIcon />}
                appearance={Button.appearances.flat}
              >
                Signup or Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
