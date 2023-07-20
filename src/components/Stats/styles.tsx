export const cardContainer = (isDrilling: boolean) => ({
  width: '400px',
  height: '500px',
  borderRadius: '15px',
  background: '#F7F7FF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '2px 2px #1e272e',
  ...(isDrilling && {
    animation: 'shakeX',
    animationDuration: '1s'
  }),
  marginLeft: '20px',
  boxSizing: 'border-box'
})
