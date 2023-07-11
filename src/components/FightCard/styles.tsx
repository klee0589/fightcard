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
  ...(isDrilling && {
    animation: 'shakeX',
    animationDuration: '1s'
  })
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
  flexDirection: 'row'
}

export const button = {
  width: '100%',
  borderRadius: '0px !important'
}
