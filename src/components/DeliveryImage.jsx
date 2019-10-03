import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as Icon } from 'assets/media/images/image2vector.svg';
import { ReactComponent as RRS } from 'assets/media/images/image2vector.svg';

export const Wrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;

  svg {
    max-height: 100%;
    width: auto;
    font-size: 7.25em!important;
    margin-top: -34px;
    width:10em!important;
    height:2em!important;
  }
`;

const DeliveryImage = ({ type = 'icon' }) => <Wrapper>{type === 'icon' ? <Icon /> : <RRS />}</Wrapper>;

DeliveryImage.propTypes = {
  type: PropTypes.string,
};

export default DeliveryImage;
