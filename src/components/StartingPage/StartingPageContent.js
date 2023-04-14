import { Fragment } from 'react';
import AddressDisplay from '../http/http';
import VerifyEmailForm from '../VerifyEmail/VerifyEmailForm';
import classes from './StartingPageContent.module.css';
import Exhibit from '../exhibit/exhibit';

const StartingPageContent = () => {

  return (
    <Fragment>
    <section className={classes.starting}>
      <h1>Welcome to Dashboard !!</h1>
      <Exhibit name="Public IPv4 Address">
        <AddressDisplay url='https://api.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name="Public IPv6 Address">
        <AddressDisplay url='https://api64.ipify.org?format=json' />
      </Exhibit>
      <VerifyEmailForm/><br/>
    </section>
    </Fragment>
  );
};

export default StartingPageContent;
