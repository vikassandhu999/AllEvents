import React from 'react';
import Header from '@app/x-shared/header';
import { css } from 'glamor';
import { GContainer } from '@app/@allevents/infra/glamor';
import Avatar from '@pluralsight/ps-design-system-avatar';
import Row from '@pluralsight/ps-design-system-row';
import { useAuth } from '@app/auth/provider/auth-provider';
import { CircularProgressBox } from '@app/@allevents/components/progress-box';
import ProfileTabsContainer from '@app/profile/components/tabs-container';

const ProfilePage = () => {
  const { user, isVerifyingAuth } = useAuth();

  return (
    <>
      <Header />
      {isVerifyingAuth ? (
        <CircularProgressBox />
      ) : (
        <div
          className={`${css({
            width: '100%',
            minHeight: '100vh',
            display: 'block',
          })}`}
        >
          <div className={`${GContainer} ${css({ paddingTop: '2rem' })}`}>
            <div
              className={`${css({
                display: 'grid',
                paddingTop: '3rem',
                gridTemplateColumns: '400px 1fr',
              })}`}
            >
              <Row
                size={Row.sizes.medium}
                title={user.firstName + ' ' + user.lastName}
                metadata1={[user.email]}
                image={
                  <Avatar
                    size="xLarge"
                    name="Assis Silva"
                    src="https://pluralsight.imgix.net/course-images/angular-2-getting-started-update-v1.jpg"
                  />
                  // <Row.Image src="https://pluralsight.imgix.net/course-images/angular-2-getting-started-update-v1.jpg" />
                }
              />
              <ProfileTabsContainer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
