export default function BasicCard({title, text, img}) {
  return (
    <div className='w-full bora-8 b-surface-1 mt-20 overflow-hidden' style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)' }}>
      <div
        className='w-full'
        style={{ height: '10rem', background: `url(${img}) no-repeat center/cover`, backgroundColor: '#EADDFF' }}
      ></div>
      <div className='d-flex-column w-full h-full p-16'>
        <div className='d-flex-row w-full ai-center jc-space-between'>
          <p className='ff-primary-font c-on-surface fw-500 fs-normal'>{title}</p>
          <span class='material-symbols-outlined c-on-surface' style={{fontSize: '2rem'}}>more_vert</span>
        </div>
        <p className='ff-primary-font c-on-surface-variant fw-400 fs-small mt-8'>{text}</p>
      </div>
    </div>
  );
}