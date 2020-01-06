import React, {ReactElement, JSXElementConstructor} from 'react';

import Spinner from '../spinner/spinner.component';

export type WithSpinnerProps = {
    isLoading:boolean;
} & React.HTMLProps<ReactElement>;

const WithSpinner = (WrappedComponent:JSXElementConstructor<any>) => ({isLoading, ...otherProps}:WithSpinnerProps) => {
    
    return isLoading ? (
        <Spinner className="spinner" />
    ) : (
        <WrappedComponent {...otherProps} />
    );
};

export default WithSpinner;