export default function CardSwipe({
  imgPresentation,
  imgProfile,
  title,
  description,
  date,
  username,
}) {
  return (
    <div className='p-20 w-full d-flex-column h-full' style={{flexGrow: '1', flexShrink: '0'}}>
      <div
        className='d-flex-column bora-8 b-surface-1 h-full overflow-hidden pos-relative'
        style={{
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
          maxHeight: '100%',
        }}
      >
        <div
          className='d-flex-row  overflow-hidden b-primary-container'
          style={{background:`url(${imgPresentation}) no-repeat center/cover`, height: '55%', maxHeight: '55%'}}
        >
          {/* <img src={imgPresentation} alt={title} style={{background: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} /> */}
        </div>
        <div className='p-16'>
          <div className='d-flex-row ai-center jc-space-between'>
            <div className='d-flex-row'>
              <img src={imgProfile} alt={username} className='w-40 mr-8' />
              <div>
                <p className='fs-small ff-primary-font c-on-surface-variant fw-500'>
                  {date}
                </p>
                <p className='fs-normal ff-primary-font c-on-surface fw-500'>
                  {username}
                </p>
              </div>
            </div>
            <span
              className='material-symbols-outlined'
              style={{ fontSize: '2rem' }}
            >
              more_vert
            </span>
          </div>
          <div className='mt-16'>
            <p className='fs-normal ff-primary-font c-on-surface fw-500'>
              {title}
            </p>
            <p className='fs-small ff-primary-font c-on-surface-variant fw-500 mt-8'>
              {description}
            </p>
          </div>
        </div>
        <div className='d-flex-row ai-center jc-center pt-16 pr-24 pb-16 pl-24 bora-100 b-primary-container w-fit-content pos-absolute' style={{bottom: '1.6rem', right: '1.6rem'}}>
          <p className='fs-normal c-on-primary-container fw-500 ff-primary-font'>
            Accepter
          </p>
        </div>
      </div>
    </div>
  );
}
