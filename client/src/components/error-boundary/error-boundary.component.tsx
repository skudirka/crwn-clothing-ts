import React, { ErrorInfo } from 'react';

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles';

type Props = {};
type State = {
    hasErrored:boolean;
}
class ErrorBoundary extends React.Component<Props, State> {
   
    state:State = {
        hasErrored: false
    }
    
    static getDerivedStateFromError(error:Error){
        // process the error
        return { hasErrored: true };
    }
    
    componentDidCatch(error:Error, info:ErrorInfo) {
        console.log(error);
    }

    render() {
        if( this.state.hasErrored ){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
                    <ErrorImageText>Sorry this page is broken.</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;