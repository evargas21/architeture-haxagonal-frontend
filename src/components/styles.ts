export default {
  delete: {
    fontSize: 18
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: 1,
    alignItems: 'center'
  },
  isComplete: {
    textDecoration: 'line-through'
  },
  input: {
    color: '#000',
    width: '100%',
    '.MuiOutlinedInput-root': {
      color: '#000',
      borderRadius: '8px',
      height: 39,
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08)',
      padding: '8.5px 0',
      '& > fieldset': {
        border: '1px solid #EEEEEE',
        color: '#000000'
      },
      '&.Mui-focused': {
        '.MuiOutlinedInput-notchedOutline': {
          border: '1px solid #FF8733'
        }
      },
      '&:hover fieldset': {
        border: '1px solid #EEEEEE'
      }
    },
    '.MuiFormLabel-root': {
      transformOrigin: '0% 120%',
      fontSize: 12,
      fontStyle: 'normal',
      color: '#000000',
      fontWeight: 400,
      lineHeight: '120%',
      '&.Mui-error': {
        color: 'palette.primary'
      }
    },
    '.MuiFormHelperText-root': {
      marginLeft: 0,
      lineHeight: '120%',
      '&.Mui-error': {
        color: 'palette.primary'
      }
    }
  }
};
