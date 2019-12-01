import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import treeChanges from 'tree-changes';
import { appColor } from 'modules/theme';

import { getRepos, showAlert, switchMenu } from 'actions/index';
import { STATUS } from 'constants/index';

import {
  ButtonGroup,
  Button,
  Flex,
  Heading,
  Link,
  Image,
  Paragraph,
  theme,
  utils,
} from 'styled-minimal';
import Loader from 'components/Loader';

import ModernDatepicker from 'react-modern-datepicker';
// import moment from 'moment';
import { FormErrors } from 'modules/FormErrors';
import { userActions } from '../actions/user.actions';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

const { responsive, spacer } = utils;
const { grays } = theme;

export class PharmacyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        first_name: '',
        last_name: '',
        phone: '',
        adresse: '',
        email: '',
      },
      pharmacy: {
        pharmacy_name: '',
        phone: '',
        adresse: '',
        email: '',
        creation_date: '',
        promoter_name: '',
        promoter_phone: '',
      },
      userSubmitted: false,
      pharmacySubmitted: false,
      startDate: new Date(),
      formErrors: { email: '' },
      emailValid: false,
      userFormValid: false,
      pharmacyFormValid: false,
      userRegisteringResponse: '',
      pharmacyRegisteringResponse: '',
    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePharmacyChange = this.handlePharmacyChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

    this.handleUserSubmit = this.handleUserSubmit.bind(this);
    this.handlePharmacySubmit = this.handlePharmacySubmit.bind(this);
  }

  handleUserChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;

    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handlePharmacyChange(event) {
    const { name, value } = event.target;
    const { pharmacy } = this.state;

    this.setState({
      pharmacy: {
        ...pharmacy,
        [name]: value,
      },
    });
  }

  handleDateChange(date) {
    this.setState({
      startDate: date,
      pharmacy: {
        ...this.state.pharmacy,
        creation_date: date,
      },
    });
  }

  handlePharmacyEmailInput(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState(
      {
        pharmacy: {
          ...this.state.pharmacy,
          email: value,
        },
        [name]: value,
      },
      () => {
        this.validatePharmacyField(name, value);
      },
    );
  }

  handleUserEmailInput(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState(
      {
        user: {
          ...this.state.user,
          email: value,
        },
        [name]: value,
      },
      () => {
        this.validateUserField(name, value);
      },
    );
  }

  validateUserField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let { emailValid } = this.state;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : " n'est pas valide";
        break;
      default:
        break;
    }
    this.setState({ formErrors: fieldValidationErrors, emailValid }, this.validateUserForm);
  }

  validateUserForm() {
    this.setState({ userFormValid: this.state.emailValid });
  }

  validatePharmacyField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let { emailValid } = this.state;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : " n'est pas valide";
        break;
      default:
        break;
    }
    this.setState({ formErrors: fieldValidationErrors, emailValid }, this.validatePharmacyForm);
  }

  validatePharmacyForm() {
    this.setState({ pharmacyFormValid: this.state.emailValid });
  }

  handleUserSubmit(event) {
    event.preventDefault();

    this.setState({ userSubmitted: true });
    const { user } = this.state;
    if (user.first_name && user.last_name && user.phone && user.adresse && user.email) {
      this.props
        .subscribe(user)
        .then(response => {
          console.log(response);
          this.setState({ userRegisteringResponse: response.message });
        })
        .catch(
          error => alert("Désolé! Une érreur s'est produite, Veuillez réessayer plutard."),
          // alert(`Désolé! Une érreur s'est produite : ${error}`)
        );
    }
  }

  handlePharmacySubmit(event) {
    event.preventDefault();

    this.setState({ pharmacySubmitted: true });
    const { pharmacy } = this.state;
    if (
      pharmacy.pharmacy_name &&
      pharmacy.phone &&
      pharmacy.adresse &&
      pharmacy.email &&
      this.state.startDate &&
      pharmacy.promoter_name &&
      pharmacy.promoter_phone
    ) {
      this.props
        .subscribe(pharmacy)
        .then(response => {
          // console.log(response);
          this.setState({ pharmacyRegisteringResponse: response.message });
        })
        .catch(
          error => alert("Désolé! Une érreur s'est produite, Veuillez réessayer plutard."),
          // alert(`Désolé! Une érreur s'est produite : ${error}`)
        );
    }
  }

  state = {
    query: 'react',
  };

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    github: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { query } = this.state;
    const { dispatch } = this.props;

    dispatch(getRepos(query));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    const { changedTo } = treeChanges(this.props, nextProps);

    if (changedTo('github.repos.status', STATUS.ERROR)) {
      dispatch(showAlert(nextProps.github.repos.message, { variant: 'danger' }));
    }
  }

  handleClick = e => {
    const { query } = e.currentTarget.dataset;
    const { dispatch } = this.props;

    this.setState({
      query,
    });

    dispatch(switchMenu(query));
  };

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    const { query } = this.state;
    const { github } = this.props;
    const data = github.repos.data[query] || [];

    // const { response } = this.props;
    // console.log(response)
    // const res = response.success;
    let output;
    const { registering } = this.props;
    const { user, userSubmitted, pharmacySubmitted, pharmacy } = this.state;

    if (query === 'react') {
      output = (
        <div className="col-md-6 col-md-offset-3 demo-form">
          <h2 className="formHeader">S'abonnez-vous en tant que pharmacie</h2>
          <div className="error-group">error-group</div>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div
            className={`form-group${
              pharmacySubmitted && !this.setState.pharmacyRegisteringResponse
                ? ' registeringResponse'
                : ' noRegisteringResponse'
            }`}
          >{` ${this.state.pharmacyRegisteringResponse}`}</div>

          <form name="form" onSubmit={this.handlePharmacySubmit}>
            <div
              className={`form-group${
                pharmacySubmitted && !pharmacy.pharmacy_name ? ' has-error' : ''
              }`}
            >
              <label htmlFor="pharmacy_name">Nom de votre pharmacie</label>
              <input
                type="text"
                className="form-control"
                name="pharmacy_name"
                value={pharmacy.pharmacy_name}
                onChange={this.handlePharmacyChange}
              />
              {pharmacySubmitted && !pharmacy.pharmacy_name && (
                <div className="help-block">Nom de votre pharmacie est obligatoire</div>
              )}
            </div>
            <div
              className={`form-group${
                pharmacySubmitted && !this.state.startDate ? ' has-error' : ''
              }`}
            >
              <label htmlFor="creation_date">Date de création</label>
              {/* <input type="text" className="form-control" name="creation_date" value={pharmacy.creation_date} onChange={this.handlePharmacyChange} /> */}
              {/* <ModernDatepicker date={this.state.date} onChange={this.handleDateChange} showBorder /> */}
              <ModernDatepicker
                date={this.state.startDate}
                format="DD-MM-YYYY"
                onChange={date => this.handleDateChange(date)}
              />
              {/* {pharmacySubmitted && !this.state.startDate &&
                                    <div className="help-block">Date de création est obligatoire</div>
                                } */}
            </div>
            <div className={`form-group${pharmacySubmitted && !user.phone ? ' has-error' : ''}`}>
              <label htmlFor="phone">Téléphone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={pharmacy.phone}
                onChange={this.handlePharmacyChange}
              />
              {pharmacySubmitted && !pharmacy.phone && (
                <div className="help-block">Téléphone est obligatoire</div>
              )}
            </div>
            <div
              className={`form-group${pharmacySubmitted && !pharmacy.adresse ? ' has-error' : ''}`}
            >
              <label htmlFor="adresse">Adresse</label>
              <input
                type="text"
                className="form-control"
                name="adresse"
                value={pharmacy.adresse}
                onChange={this.handlePharmacyChange}
              />
              {pharmacySubmitted && !pharmacy.adresse && (
                <div className="help-block">Adresse est obligatoire</div>
              )}
            </div>
            <div
              className={`form-group${pharmacySubmitted && !pharmacy.email ? ' has-error' : ''}`}
            >
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.pharmacy.email}
                onChange={event => this.handlePharmacyEmailInput(event)}
              />
              {pharmacySubmitted && !pharmacy.email && (
                <div className="help-block">Email est obligatoire</div>
              )}
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`} />
            <div
              className={`form-group${
                pharmacySubmitted && !pharmacy.promoter_name ? ' has-error' : ''
              }`}
            >
              <label htmlFor="promoter_name">Nom du promoteur</label>
              <input
                type="text"
                className="form-control"
                name="promoter_name"
                value={pharmacy.promoter_name}
                onChange={this.handlePharmacyChange}
              />
              {pharmacySubmitted && !pharmacy.promoter_name && (
                <div className="help-block">Nom du promoteur est obligatoire</div>
              )}
            </div>
            <div
              className={`form-group${
                pharmacySubmitted && !pharmacy.promoter_phone ? ' has-error' : ''
              }`}
            >
              <label htmlFor="promoter_phone">Téléphone du promoteur</label>
              <input
                type="text"
                className="form-control"
                name="promoter_phone"
                value={pharmacy.promoter_phone}
                onChange={this.handlePharmacyChange}
              />
              {pharmacySubmitted && !pharmacy.promoter_phone && (
                <div className="help-block">Contact du promoteur est obligatoire</div>
              )}
            </div>
            <div className="form-group">
              <button className="btn btn-primary" disabled={!this.state.pharmacyFormValid}>
                S'abonner
              </button>
              {/* {registering && (
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              )}
              <Link href="/login" to="/login" className="btn btn-link">
                Annuler
              </Link> */}
            </div>
          </form>
        </div>
      );
    } else if (query === 'redux') {
      output = (
        <div className="col-md-6 col-md-offset-3 demo-form">
          <h2 className="formHeader">S'abonnez-vous en tant que particulier</h2>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div
            className={`form-group${
              userSubmitted && !this.setState.userRegisteringResponse
                ? ' registeringResponse'
                : ' noRegisteringResponse'
            }`}
          >{` ${this.state.userRegisteringResponse}`}</div>
          <form name="form" onSubmit={this.handleUserSubmit}>
            <div className={`form-group${userSubmitted && !user.first_name ? ' has-error' : ''}`}>
              <label htmlFor="first_name">Nom</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                value={user.first_name}
                onChange={this.handleUserChange}
              />
              {userSubmitted && !user.first_name && (
                <div className="help-block">Nom est obligatoire</div>
              )}
            </div>
            <div className={`form-group${userSubmitted && !user.last_name ? ' has-error' : ''}`}>
              <label htmlFor="last_name">Prenom</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                value={user.last_name}
                onChange={this.handleUserChange}
              />
              {userSubmitted && !user.last_name && (
                <div className="help-block">Prenom est obligatoire</div>
              )}
            </div>
            <div className={`form-group${userSubmitted && !user.phone ? ' has-error' : ''}`}>
              <label htmlFor="phone">Téléphone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={user.phone}
                onChange={this.handleUserChange}
              />
              {userSubmitted && !user.phone && (
                <div className="help-block">Téléphone est obligatoire</div>
              )}
            </div>
            <div className={`form-group${userSubmitted && !user.adresse ? ' has-error' : ''}`}>
              <label htmlFor="adresse">Adresse</label>
              <input
                type="text"
                className="form-control"
                name="adresse"
                value={user.adresse}
                onChange={this.handleUserChange}
              />
              {userSubmitted && !user.adresse && (
                <div className="help-block">Adresse est obligatoire</div>
              )}
            </div>
            <div className={`form-group${userSubmitted && !user.email ? ' has-error' : ''}`}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={event => this.handleUserEmailInput(event)}
              />
              {userSubmitted && !user.email && (
                <div className="help-block">Email est obligatoire</div>
              )}
            </div>
            <div className="form-group">
              <button className="btn btn-primary" disabled={!this.state.userFormValid}>
                S'abonner
              </button>
              {/* {registering && (
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              )}
              <Link href="/login" to="/login" className="btn btn-link">
                Annuler
              </Link> */}
            </div>
          </form>
        </div>
      );
    }

    return (
      <div key="GitHub" data-testid="GitHubWrapper">
        <Flex justifyContent="center">
          <ButtonGroup role="group" aria-label="GitHub Selector" data-testid="GitHubSelector">
            <Button
              animate={query === 'react' && github.repos.status === 'running'}
              bordered={query !== 'react'}
              size="lg"
              data-query="react"
              onClick={this.handleClick}
            >
              Je suis une pharmacie
            </Button>
            <Button
              animate={query === 'redux' && github.repos.status === 'running'}
              bordered={query !== 'redux'}
              size="lg"
              data-query="redux"
              onClick={this.handleClick}
            >
              Je suis un particulier
            </Button>
          </ButtonGroup>
        </Flex>
        {output}
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    github: state.github,
    subscribe: userActions.subscribe, // you should send your action like this
  };
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

export default connect(mapStateToProps)(PharmacyForm);
