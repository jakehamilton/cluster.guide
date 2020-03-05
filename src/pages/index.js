import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Learn to create your own automated Kubernetes cluster."
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className={styles.heroLogo}>
            <img src={useBaseUrl("/img/cluster.guide.png")} />
            <span className={styles.logoRibbon}>Beta</span>
          </div>
          <h1 className={classnames("hero__title", styles.heroTitle)}>
            <span>cluster</span><span>.guide</span>
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/getting-started/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
