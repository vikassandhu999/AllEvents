import { TextFieldProps, withStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { useController } from 'react-hook-form';

const StyledTextField = withStyles((theme) => ({
  root: {
    // marginTop: theme.spacing(2),
    margin: theme.spacing(1),
    width: '100%',
    fontSize: '1rem',
    '& label': {
      color: '#bdbbbb',
    },
    '& label.Mui-focused': {
      color: '#111',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#bdbbbb',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#bdbbbb',
      },
      '&:hover fieldset': {
        borderColor: '#bdbbbb',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#bdbbbb',
      },
    },
  },
}))(TextField);

interface Props {
  textFieldProps: TextFieldProps;
  control: any;
  name: string;
}

const AETextField: FC<Props> = ({ textFieldProps, control, name }) => {
  const {
    field: { ref, ...inputProps },
    // fieldState: {invalid, isTouched, isDirty},
    // formState: {touchedFields, dirtyFields}
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: '',
  });



  return <StyledTextField 
  {...textFieldProps} 
  {...inputProps} 
  inputRef={ref} 
  />;
};

export default AETextField;
