import logo from '../assets/logo.png'

export default function Building() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <img style={{ maxWidth: '90%' }} src={logo} alt="Vimal" />
      <h1>It Look like we're Building</h1>
      <p>Please try after some time</p>
    </div>
  )
}
