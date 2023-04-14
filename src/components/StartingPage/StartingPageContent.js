import { Fragment } from 'react';

import VerifyEmailForm from '../VerifyEmail/VerifyEmailForm';
import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {

  return (
    <Fragment>
    <section className={classes.starting}>
      <h1>Welcome to Dashboard !!</h1>
      <VerifyEmailForm/><br/>
    </section>
    </Fragment>
  );
};

export default StartingPageContent;
