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
    font-size: 7.25em!important;
    margin-top: -34px;
    width:10em;
    height:2em;
  }

  @media (max-width: 625px) {
    svg {
      width:4em;
    }
  }

  @media only screen and (min-width: 625px) and (max-width: 768px) {
    svg {
      width:5em;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 900px) {
    svg {
      width:6em;
    }
  }

  @media only screen and (min-width: 900px) and (max-width: 1000px) {
    svg {
      width:7em;
    }
  }

  @media only screen and (min-width: 1000px) and (max-width: 1100px) {
    svg {
      width:8em;
    }
  }

  @media only screen and (min-width: 1100px) and (max-width: 1200px) {
    svg {
      width:9em;
      margin: 0 auto;
    }
  }

  @media (min-width: 1200px) {
    svg {
      width:10em;
      margin: 0 auto;
    }
  }

`;

const DeliveryImage = ({ type = 'icon' }) => <Wrapper>{type === 'icon' ? <Icon /> : <RRS />}</Wrapper>;

DeliveryImage.propTypes = {
  type: PropTypes.string,
};

export default DeliveryImage;
