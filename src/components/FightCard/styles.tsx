export const mainContainer = (isDrilling: boolean) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: isDrilling ? '#279AF1' : '#e74c3c'
})

export const cardContainer = (isDrilling: boolean) => ({
  width: '100%',
  height: '500px',
  background: '#F7F7FF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  ...(isDrilling && {
    animation: 'shakeX',
    animationDuration: '1s'
  }),
  boxSizing: 'border-box'
})

export const recordContainer = (isDrilling: boolean) => ({
  width: '400px',
  height: '500px',
  background: '#F7F7FF',
  display: 'flex',
  flexDirection: 'column',
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
  borderRadius: '0',
  height: '100px'
}

export const bottomButton = {
  borderRadius: '0',
  height: '100px'
}
