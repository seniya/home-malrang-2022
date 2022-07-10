import React from 'react';

import Layout from '../layout';
import Seo from '../components/seo';
import WiseCatSaying from '@malrang-toy/wise-cat-saying';

function WiseCatSayingPage() {

  setTimeout(() => {
    const theCat = new WiseCatSaying('my-cat-card')
    theCat.render()
  }, 1000);

  return (
    <Layout>
      <Seo title="Demo" />
      <h1>WiseCatSayingPage</h1>
      <div id="my-cat-card"></div>
    </Layout>
  );
}

export default WiseCatSayingPage;
