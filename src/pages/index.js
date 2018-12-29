import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="container">
      <header class="text-center">
        <h1>
          Daniel<span>Georgiev</span>
        </h1>
        <h2>freelance full stack developer</h2>
        <h3>me [at] dgeorgiev [dot] biz</h3>
      </header>
    </div>
  </Layout>
);

export default IndexPage;
