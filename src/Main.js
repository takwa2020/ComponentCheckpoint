import React from 'react';
import Address from './profile/Address';
import FullName from './profile/FullName';
import ProfilPhoto from './profile/ProfilPhoto';
function Main() {
  return (
    <div>
      <ProfilPhoto/>
      <FullName/>
      <Address />
    </div>
  );
}

export default Main;
