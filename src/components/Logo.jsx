import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as Icon } from 'assets/media/brand/LOGO-FINAL.svg';
import { ReactComponent as RRS } from 'assets/media/brand/LOGO-FINAL-SWIFTDRUG.svg';

export const Wrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;

  svg {
    max-height: 100%;
    width: auto;
    font-size: 7.25em!important;
    margin-top: -34px;
  }
`;

const Logo = ({ type = 'icon' }) => <Wrapper>{type === 'icon' ? <Icon /> : <RRS />}</Wrapper>;

Logo.propTypes = {
  type: PropTypes.string,
};

export default Logo;
