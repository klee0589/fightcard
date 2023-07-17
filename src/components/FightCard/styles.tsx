export const mainContainer = (isDrilling: boolean) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: isDrilling ? '#279AF1' : '#e74c3c'
})

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

export const recordContainer = (isDrilling: boolean) => ({
  width: '400px',
  height: '500px',
  borderRadius: '15px',
  background: '#F7F7FF',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '2px 2px #1e272e',
  ...(isDrilling && {
    animation: 'shakeX',
    animationDuration: '1s'
  }),
  padding: '10px',
  boxSizing: 'border-box',
  overflow: 'scroll'
})

export const comboName = {
  fontSize: '32px',
  textTransform: 'uppercase',
  marginTop: '10px'
}

export const timer = {
  fontSize: '28px',
  textTransform: 'uppercase',
  height: '20px'
}

export const buttonContainer = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
}

export const startButton = {
  borderRadius: '0 0 0 0'
}

export const bottomButton = {
  borderRadius: '0 0 15px 15px'
}
