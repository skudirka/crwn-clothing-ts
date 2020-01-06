import {ComponentPropsWithRef} from 'react';
import styled, {css} from 'styled-components';
import styledComponentsTS from 'styled-components-ts';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
    position: relative;
    margin: 45px 0;

    input[type='password'] {
        letter-spacing: 0.3em;
    }
`;

export interface FormInputContainerProps<T> extends ComponentPropsWithRef<'input'> {
  displayName?:string;
}
export const FormInputContainer = styledComponentsTS<FormInputContainerProps<HTMLInputElement>>(styled.input)`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      ${shrinkLabelStyles}
    }
`;
FormInputContainer.displayName = 'FormInputContainer';

export type FormInputContainerType = ReturnType<typeof FormInputContainer>

export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
        ${shrinkLabelStyles}
    }
`;
FormInputLabel.displayName = 'FormInputLabel';