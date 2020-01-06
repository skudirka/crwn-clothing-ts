import React, {FormEvent} from 'react';

import {GroupContainer, FormInputContainer, FormInputLabel, FormInputContainerProps} from './form-input.styles';

export interface IFormInputProps extends FormInputContainerProps<HTMLInputElement> {
    handleChange?:(event: FormEvent<HTMLInputElement>) => void;
    label?:string;
}
export type FormInputProps = IFormInputProps;

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({handleChange, label, ...otherProps}, ref) => {
    return (
        <GroupContainer className="group">
            <FormInputContainer className="form-input" ref={ref} onChange={handleChange} {...otherProps} />
            {
                label ? (
                    <FormInputLabel className={'form-input-label ' + ((otherProps.value as string).length ? 'shrink' : '')}>
                        {label}
                    </FormInputLabel>
                ) : null
            }
        </GroupContainer>
    );
});

export default FormInput;