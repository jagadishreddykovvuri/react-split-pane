import React from 'react';
import SplitPane from '../src';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
  flex: 1;
  display: flex;
  height: 70%;
  width: 70%;
  border: 1px solid red;
`;

export default () => (
  <React.Fragment>
    outer container
    <Wrapper>
      <SplitPane defaultSize="40%" split="vertical">
        <div>size: 40%</div>
        <div />
      </SplitPane>
    </Wrapper>
  </React.Fragment>
);
