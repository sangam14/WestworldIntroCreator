import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import OpeningProvider from './OpeningProvider';
import connectContext from './connectContext';
import ContactButton from './ContactButton';
import TermsOfServiceAcceptance from './TermsOfServiceAcceptance';

class AfterVideoCard extends Component {
  _download = () => {
    const { openingKey, history } = this.props;
    history.push(`/${openingKey}/download`);
  }

  _backToEdit = () => {
    const { openingKey, history } = this.props;
    history.push(`/${openingKey}/edit`);
  }

  render() {
    return (
      <div className="after-video-card">
        <div className="box">
          <div>
            <p>
              Great! You made your own custom Westworld opening!
            </p>
            <p>
              If the video did not play smoothly and paused for loading,
              it may have caused desynchronization with the text.<br />
              Try to play it again.
              As the video already been loaded the next reproduction should be better.
            </p>
            <p>
              The Download option will be available soon!
              But you can put your email in and
              we will tell you when the download option be available.
            </p>
          </div>
          <div className="buttons">
            <button onClick={this._download} className="button big">
              DOWNLOAD
            </button>
            <button onClick={this._backToEdit} className="button medium">
              BACK TO EDIT
            </button>
          </div>

          <div>
            <TermsOfServiceAcceptance />
            <ContactButton />
          </div>
        </div>
      </div>
    );
  }
}

AfterVideoCard.propTypes = {
  history: PropTypes.object,
  openingKey: PropTypes.string,
};

const mapOpeningProviderToProps = context => ({
  openingKey: context.key,
});

const connectOpeningProvider = connectContext(OpeningProvider, mapOpeningProviderToProps);

export default withRouter(connectOpeningProvider(AfterVideoCard));
