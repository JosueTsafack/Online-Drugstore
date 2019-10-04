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

import { useField } from '@formiz/core'
import { isEmail } from '@formiz/validations'
import { isRequired } from '@formiz/validations' 
import { Formiz } from '@formiz/core'

const { responsive, spacer } = utils;
const { grays } = theme;


export class PharmacyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
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
        // const [isLoading, setIsLoading] = React.useState(false)
        // 1. Create a reusable field
        const MyField = (props) => {
            const {
                errorMessage,
                id,
                isValid,
                isPristine,
                isSubmitted,
                resetKey,
                setValue,
                value,
            } = useField(props)
            const { label, type, isRequired } = props
            const [isFocused, setIsFocused] = React.useState(false);
            const showError = !isValid && (!isPristine || isSubmitted)
            // const [isLoading, setIsLoading] = React.useState(false)
            return (
                <div className={`demo-form-group ${(showError && !isFocused) ? 'is-error' : ''}`}>
                    <label
                        className="demo-label"
                        htmlFor={id}
                    >
                        {label}
                        {isRequired && ' *'}
                    </label>
                    <input
                        key={resetKey}
                        id={id}
                        type={type || 'text'}
                        defaultValue={value}
                        className="demo-input"
                        onChange={e => setValue(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        aria-invalid={!isValid}
                        aria-describedby={!isValid ? `${id}-error` : null}
                    />
                    {showError && (
                        <div id={`${id}-error`} className="demo-form-feedback">
                            {errorMessage}
                        </div>
                    )}
                </div>
            )
        };


        if (query === 'react') {
            output = 
            <Formiz >
                <form onSubmit={this.handleSubmit}
                    noValidate
                    className="demo-form"
                    style={{ minHeight: '16rem' }}
                >
                    <div className="demo-form__content">
                        <MyField
                            name="Nom de la pharmacie"
                            label="Nom de la pharmacie"
                            isRequired="Name is required"
                        />
                        <MyField
                            name="Localisation"
                            label="Localisation"
                        />
                        <MyField
                            name="Téléphone"
                            label="Téléphone"
                        />
                        <MyField
                            name="Adresse"
                            label="Adresse"
                        /> 
                        <MyField
                            name="Email"
                            label="Email"
                            type="email"
                            isRequired="Email is required"
                            // validations={[
                            //     {
                            //         rule: validations.isEmail(),
                            //         message: 'Not a valid email',
                            //     }
                            // ]}
                        />
        
                        <MyField
                            name="Numéro de contribuable"
                            label="Numéro de contribuable"
                        />
                        <MyField
                            name="Date de création"
                            label="Date de création"
                        />
                        <MyField
                            name="Nom du promoteur"
                            label="Nom du promoteur"
                        />
                        <MyField
                            name="Contact du promoteur"
                            label="Contact du promoteur"
                        />
                    </div>
                    <div className="demo-form__footer">
                        <div
                            className="ml-auto"
                            style={{ minWidth: '6rem' }}
                        >
                            <button
                                className="demo-button is-primary"
                                type="submit"
                                // disabled={isLoading || (!form.isValid && form.isSubmitted)}
                            >
                            S'inscrire
                                {/* {isLoading ? 'Loading...' : 'Submit'} */}
                            </button>
                        </div>
                    </div>
                </form>
            </Formiz>
        }else if(query === 'redux') {
            output =
            <Formiz >
                <form onSubmit={this.handleSubmit}
                    noValidate
                    className="demo-form"
                    style={{ minHeight: '16rem' }}
                >
                    <div className="demo-form__content">
                        <MyField
                            name="Nom"
                            label="Nom"
                            isRequired="Name is required"
                        />
                        <MyField
                            name="Prenom"
                            label="Prenom"
                        />
                        <MyField
                            name="Téléphone"
                            label="Téléphone"
                        />
                        <MyField
                            name="Adresse"
                            label="Adresse"
                        /> 
                        <MyField
                            name="Email"
                            label="Email"
                            type="email"
                            isRequired="Email is required"
                            // validations={[
                            //     {
                            //         rule: validations.isEmail(),
                            //         message: 'Not a valid email',
                            //     }
                            // ]}
                        />
                        {/* <MyField
                            name="password"
                            label="Password"
                            type="password"
                        />
                        <MyField
                            name="passwordConfirm"
                            label="Confirm password"
                            type="password"
                            validations={[
                                {
                                    rule: (value, values) => values.password === value,
                                    message: 'Passwords do not match',
                                }
                            ]}
                        /> */}
                    </div>
                    <div className="demo-form__footer">
                        <div
                            className="ml-auto"
                            style={{ minWidth: '6rem' }}
                        >
                            <button
                                className="demo-button is-primary"
                                type="submit"
                                // disabled={isLoading || (!form.isValid && form.isSubmitted)}
                            >
                            Submit
                                {/* {isLoading ? 'Loading...' : 'Submit'} */}
                            </button>
                        </div>
                    </div>
                </form>
                </Formiz>
            }

        {/* <form onSubmit={this.handleSubmit}>
        <label>
          Last name:
          <input
            name="numberOfGuests"
            type="text"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <label>
          First name:
          <input
            name="numberOfGuests"
            type="text"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="text"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
    </form>; */}

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
    return { github: state.github };
}

export default connect(mapStateToProps)(PharmacyForm);

/* export default PharmacyForm; */
