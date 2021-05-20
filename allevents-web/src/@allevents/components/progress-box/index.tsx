import { css } from 'glamor';
import CircularProgress from '@pluralsight/ps-design-system-circularprogress';
import React from 'react';

export function CircularProgressBox() {
  return (
    <div
      className={`${css({
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      })}`}
    >
      <CircularProgress />
    </div>
  );
}

export function LinearProgressBox() {
  return (
    <div
      className={`${css({
        width: '100%',
        minHeight: '100vh',
        display: 'block',
      })}`}
    ></div>
  );
}
