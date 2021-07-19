import React, { useEffect, useState } from 'react';
import lottie from 'lottie-web';
import Loader from '../utils/static/loader.json';

import styled from 'styled-components';

const Test = styled.div`
  width: auto;
  height: 500px;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : '20vh')};
`;

function Loading(props) {
  const { paddingTop } = props;

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#loader'),
      animationData: Loader
    });
  }, []);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setLoaderShow(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <div>
      <Test id="loader" paddingTop={paddingTop}></Test>
    </div>
  );
}

export { Loading };
