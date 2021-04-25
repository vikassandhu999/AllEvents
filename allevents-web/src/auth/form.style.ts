import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useFormStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      minHeight: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
    box0: {
      display: 'block',
      height: theme.spacing(2),
    },
    box: {
      display: 'block',
      height: theme.spacing(4),
    },
    formTitle: {
      // marginBottom:theme.spacing(8)
      fontWeight: 600,
    },
    formCard: {
      minWidth: '400px',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      padding: theme.spacing(3),
    },
  }),
);

export default useFormStyles;
