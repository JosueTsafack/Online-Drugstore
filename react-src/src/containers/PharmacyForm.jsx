import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import treeChanges from 'tree-changes';
import { appColor } from 'modules/theme';

import { getRepos, showAlert, switchMenu } from 'actions/index';
import { STATUS } from 'constants/index';

import { userActions } from '../actions/user.actions';

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


const { responsive, spacer } = utils;
const { grays } = theme;

export class PharmacyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                phone: '',
                adresse: '',
                email: ''
            },
            pharmacy: {
                pharmacyName: '',
                locality: '',
                phone: '',
                adresse: '',
                email: '',
                creationDate: '',
                promoterName: '',
                promoterContact: ''
            },
            userSubmitted: false,
            pharmacySubmitted: false
        };

        
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePharmacyChange = this.handlePharmacyChange.bind(this);
        // this.handleChange = this.handleChange.bind(this);

        this.handleUserSubmit = this.handleUserSubmit.bind(this);
        this.handlePharmacySubmit = this.handlePharmacySubmit.bind(this);
    }

    handleUserChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handlePharmacyChange(event) {
        const { name, value } = event.target;
        const { pharmacy } = this.state;

        this.setState({
            pharmacy: {
                ...pharmacy,
                [name]: value
            }
        });
    }

    handleUserSubmit(event) {
        event.preventDefault();

        this.setState({ userSubmitted: true });
        const user = this.state['user'];
        if (user.firstName && user.lastName && user.phone && user.adresse && user.email) {
            this.props.subscribe(user);
        }
    }

    handlePharmacySubmit(event) {
        event.preventDefault();

        this.setState({ pharmacySubmitted: true });
        const pharmacy = this.state['pharmacy']; 
        if (pharmacy.pharmacyName && pharmacy.locality && pharmacy.phone &&
            pharmacy.adresse && pharmacy.email && pharmacy.creationDate &&
             pharmacy.promoterName && pharmacy.promoterContact) {
            this.props.subscribe(pharmacy);
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

    render() {
        const { query } = this.state;
        const { github } = this.props;
        const data = github.repos.data[query] || [];
        let output;
        const { registering  } = this.props;
        const { user, userSubmitted, pharmacySubmitted, pharmacy } = this.state;

        if (query === 'react') {
            output = <div className="col-md-6 col-md-offset-3 demo-form">
                        <h2 className="formHeader">S'abonnez-vous en tant que pharmacie</h2>
                        <form name="form" onSubmit={this.handlePharmacySubmit}>
                            <div className={'form-group' + (pharmacySubmitted && !pharmacy.pharmacyName ? ' has-error' : '')}>
                                <label htmlFor="pharmacyName">Nom de votre pharmacie</label>
                                <input type="text" className="form-control" name="pharmacyName" value={pharmacy.pharmacyName} onChange={this.handlePharmacyChange} />
                                {pharmacySubmitted && !pharmacy.pharmacyName &&
                                    <div className="help-block">Nom de votre pharmacie est obligatoire</div>
                                }
                            </div>
                            <div className={'form-group' + (pharmacySubmitted && !pharmacy.locality ? ' has-error' : '')}>
                                <label htmlFor="locality">Localisation</label>
                                <input type="text" className="form-control" name="locality" value={pharmacy.locality} onChange={this.handlePharmacyChange} />
                                {pharmacySubmitted && !pharmacy.locality &&
                                    <div className="help-block">Localisation est obligatoire</div>
                                }
                            </div>
                            <div className={'form-group' + (pharmacySubmitted && !user.phone ? ' has-error' : '')}>
                                <label htmlFor="phone">Téléphone</label>
                                <input type="text" className="form-control" name="phone" value={pharmacy.phone} onChange={this.handlePharmacyChange} />
                                {pharmacySubmitted && !pharmacy.phone &&
                                    <div className="help-block">Téléphone est obligatoire</div>
                                }
                            </div>
                            <div className={'form-group' + (pharmacySubmitted && !pharmacy.adresse ? ' has-error' : '')}>
                                <label htmlFor="adresse">Adresse</label>
                                <input type="text" className="form-control" name="adresse" value={pharmacy.adresse} onChange={this.handlePharmacyChange} />
                                {pharmacySubmitted && !pharmacy.adresse &&
                                    <div className="help-block">Adresse est obligatoire</div>
                                }
                            </div>
                            <div className={'form-group' + (pharmacySubmitted && !pharmacy.email ? ' has-error' : '')}>
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" name="email" value={pharmacy.email} onChange={this.handlePharmacyChange} />
                                {pharmacySubmitted && !pharmacy.email &&
                                    <div className="help-block">Email est obligatoire</div>
                                }
                            </div>
                            <div className={'form-group' + (pharmacySubmitted && !pharmacy.creationDate ? ' has-error' : '')}>
                                <label htmlFor="creationDate">Date de création</label>
                                <input type="text" className="form-control" name="creationDate" value={pharmacy.creationDate} onChange={this.handlePharmacyChange} />
                                {pharmacySubmitted && !pharmacy.creationDate &&
                                    <div className="help-block">Date de création est obligatoire</div>
                                }
                            </div>
                            <div className={'form-group' + (pharmacySubmitted && !pharmacy.promoterName ? ' has-error' : '')}>
                                <label htmlFor="promoterName">Nom du promoteur</label>
                                <input type="text" className="form-control" name="promoterName" value={pharmacy.promoterName} onChange={this.handlePharmacyChange} />
                                {pharmacySubmitted && !pharmacy.promoterName &&
                                    <div className="help-block">Nom du promoteur est obligatoire</div>
                                }
                            </div>
                            <div className={'form-group' + (pharmacySubmitted && !pharmacy.promoterContact ? ' has-error' : '')}>
                                <label htmlFor="promoterContact">Contact du promoteur</label>
                                <input type="text" className="form-control" name="promoterContact" value={pharmacy.promoterContact} onChange={this.handlePharmacyChange} />
                                {pharmacySubmitted && !pharmacy.promoterContact &&
                                    <div className="help-block">Contact du promoteur est obligatoire</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">S'abonner</button>
                                {registering && 
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                                <Link to="/login" className="btn btn-link">Annuler</Link>
                            </div>
                        </form>
                    </div>
        }else if(query === 'redux') {
            output = <div className="col-md-6 col-md-offset-3 demo-form">
                        <h2 className="formHeader">S'abonnez-vous en tant que particulier</h2>
                        <form name="form" onSubmit={this.handleUserSubmit}>
                            <div className={'form-group' + (userSubmitted && !user.firstName ? ' has-error' : '')}>
                                <label htmlFor="firstName">Nom</label>
                                <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleUserChange} />
                                {userSubmitted && !user.firstName &&
                                    <div className="help-block">Nom est obligatoire</div>
                                }
                            </div>
                            <div className={'form-group' + (userSubmitted && !user.lastName ? ' has-error' : '')}>
                                <label htmlFor="lastName">Prenom</label>
                                <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleUserChange} />
                                {userSubmitted && !user.lastName &&
                                    <div className="help-block">Prenom est obligatoire</div>
                                }
                            </div>
                            <div className={'form-group' + (userSubmitted && !user.phone ? ' has-error' : '')}>
                                <label htmlFor="phone">Téléphone</label>
                                <input type="text" className="form-control" name="phone" value={user.phone} onChange={this.handleUserChange} />
                                {userSubmitted && !user.phone &&
                                    <div className="help-block">Téléphone est obligatoire</div>
                                }
                            </div>
                            <div className={'form-group' + (userSubmitted && !user.adresse ? ' has-error' : '')}>
                                <label htmlFor="adresse">Adresse</label>
                                <input type="text" className="form-control" name="adresse" value={user.adresse} onChange={this.handleUserChange} />
                                {userSubmitted && !user.adresse &&
                                    <div className="help-block">Adresse est obligatoire</div>
                                }
                            </div>
                            <div className={'form-group' + (userSubmitted && !user.email ? ' has-error' : '')}>
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleUserChange} />
                                {userSubmitted && !user.email &&
                                    <div className="help-block">Email est obligatoire</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">S'abonner</button>
                                {registering && 
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                                <Link to="/login" className="btn btn-link">Annuler</Link>
                            </div>
                        </form>
                    </div>
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