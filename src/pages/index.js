import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Projects, About } from 'components/landing';
import { Header } from 'components/theme';


export default () => (
  <Layout>
    <SEO />
    <Header />
    <Intro />
    <About />
    <Projects />
  </Layout>
);
