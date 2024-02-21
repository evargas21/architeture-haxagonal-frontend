export default {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 4,
    gap: '16px',
    color: '#000',
    width: 471,
    height: 575,
    background: '#fff',
    boxShadow: '0px 4px 19px rgba(0, 0, 0, 0.25)',
    borderRadius: '12px'
  },
  cardContainer: {
    padding: '14px 24px 24px'
  },
  subContainerCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    gap: '24px',
    width: 462,
    alignContent: 'center',
    backgroundColor: 'background.card',
    background: '#fff',
    borderRadius: '10px',
    height: 'calc(68vh - 142px)',
    border: '1px solid #cac5c5',
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  list: {
    maxHeight: 'calc(68vh - 168px)',
    overflowY: 'auto',
    color: '#000',
    paddingTop: 0,
    paddingBottom: 0
  },
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
};
