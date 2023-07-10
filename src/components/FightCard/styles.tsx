export const background = (isDrilling: boolean) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: isDrilling ? '#279AF1' : '#e74c3c'
})
