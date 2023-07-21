import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Add items to this list
const FeatureList = [
  {
    title: 'Easy to search',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Use the Algolia search bar to find exercises relevant to your 
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  let enableSvg = false
  let svg
  if(enableSvg) {
    svg = <Svg className={styles.featureSvg} role="img" />
  }
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        {svg}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
