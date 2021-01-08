import React from 'react';
import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';
import { Books } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Header />
    <Books />
  </Layout>
);
