import React from 'react';
import Bookshelf from '../../components/Bookshelf/Bookshelf';
import worksData from '../../data/works-jp.json';

import Sidebar from '../../components/Sidebar/Sidebar';

const JapaneseBookshelf = () => {
  return (
    <>
      <Sidebar />
      <Bookshelf works={worksData} language="jp" />;
    </>
  );
};

export default JapaneseBookshelf;
