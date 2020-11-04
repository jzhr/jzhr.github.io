import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Projects, About } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <About />
    <Projects />
  </Layout>
);
