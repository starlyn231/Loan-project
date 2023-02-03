import OverlayImage from '../../../../assets/image/Overlay.png'
export const History = () => {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', flexDirection: 'column'
    }}>

      <img src={OverlayImage} alt="" style={{ marginBottom: '50PX' }} />
      <img src={OverlayImage} alt="" />
    </div>
  )
}
