export default function CardSwipe({
  imgPresentation,
  imgProfile,
  title,
  description,
  date,
  username,
}) {
  return (
    <div className='p-20 w-full d-flex-column h-full'>
      <div
        className='d-flex-column bora-8 b-surface-1 h-full overflow-hidden'
        style={{
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
          maxHeight: '100%',
        }}
      >
        <div
          className='d-flex-row b-primary-container overflow-hidden'
          style={{ height: '55%', background: imgPresentation }}
        ></div>
        <div>
          <img
            src={imgProfile}
            alt={username}
            className='w-full b-primary-container'
          />
          <div>
            <p>{date}</p>
            <p>{username}</p>
          </div>
          <span className='material-symbols-outlined'>more_vert</span>
          <div>
            <p>{title}</p>
            <p>{description}</p>
          </div>
          <div>
            <p>Accepter</p>
          </div>
        </div>
      </div>
    </div>
  );
}
