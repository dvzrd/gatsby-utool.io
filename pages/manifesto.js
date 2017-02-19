import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { rhythm } from 'utils/typography';
import { config } from 'config';
import Hero from 'containers/hero';
import Subscribe from 'containers/subscribe';

const style = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    padding: 0,
    paddingBottom: rhythm(2)
  }
};

class ManifestoIndex extends Component {
  render() {
    const { route } = this.props;
    const hero = {
      title: 'µTool Manifesto',
      description: 'We are uncovering better ways to collaborate together and produce more meaningful software.'
    };

    return (
      <DocumentTitle title={`${config.siteTitle} | ${hero.title}`}>
        <main className="index page" style={style.page}>
          <Hero route={route} meta={hero} />
          <section className="values section">
            <h5 className="title">Values:</h5>
            <ul className="values list">
              <li className="value item">
                <strong>Authenticity</strong>
                To be vulnerable and build real connections.
              </li>
              <li className="value item">
                <strong>Adaptability</strong>
                To respond to change quickly and continually grow.
              </li>
              <li className="value item">
                <strong>Simplicity</strong>
                To eliminate clutter and keep only what's meaningful.
              </li>
              <li className="value item">
                <strong>Bravery</strong>
                To take risks and embrace the consequences.
              </li>
              <li className="value item">
                <strong>Self-awareness</strong>
                To realize our strengths and collaborate effectively.
              </li>
            </ul>
          </section>
          <Subscribe />
        </main>
      </DocumentTitle>
    );
  }
}

AboutIndex.propTypes = {
  route: PropTypes.object
};

export default AboutIndex;
