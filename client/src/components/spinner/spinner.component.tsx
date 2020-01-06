import React from 'react';

import {SpinnerContainer, SpinnerOverlay} from './spinner.styles';

const Spinner:React.FC<React.HTMLProps<HTMLElement>> = () => (
    <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
);

export default Spinner;