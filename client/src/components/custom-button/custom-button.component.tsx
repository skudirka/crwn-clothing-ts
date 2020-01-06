import React, {ComponentPropsWithRef} from 'react';

import {CustomButtonContainer, CustomButtonContainerProps} from './custom-button.styles';

export interface ICustomButtonProps extends ComponentPropsWithRef<'button'> {
    children: string;
    onClick: ()=>void;
}
export type CustomButtonProps = CustomButtonContainerProps<HTMLButtonElement>;

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>((props, ref) => {
    return (
        <CustomButtonContainer ref={ref} {...props} />
    );
});


export default CustomButton;
export type CustomButtonType = ReturnType<typeof CustomButton>