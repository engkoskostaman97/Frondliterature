import React from 'react';
import { HashLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'none',
};

export const PageLoading = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <HashLoader
        style={override}
        size={100}
        color={'#ee4622'}
        loading={true}
      />
    </div>
  );
};

