import React from 'react';
import Bookshelf from '../../components/Bookshelf/Bookshelf';
import worksData from '../../data/works-ko.json';

import Sidebar from '../../components/Sidebar/Sidebar';

const KoreanBookshelf = () => {
  return (
    <>
      <Sidebar />
      <Bookshelf works={worksData} language="ko" />
    </>
  );
};

export default KoreanBookshelf;
