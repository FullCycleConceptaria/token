import styles from './requests.module.scss'

export default function Requests({imgPresentation, imgProfile, title, description, date, username}){
    return(
      <div className='p-20 w-full d-flex-column h-full'>
        <div className='d-flex-column bora-8 b-surface-1 h-full' style={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)'}}>
            <img src={imgPresentation} alt={title} />
            <div>
                <div>
                    <div>
                        <img src={imgProfile} alt={username} />
                        <div>
                            <p>{date}</p>
                            <p>{username}</p>
                        </div>
                        <span className="material-symbols-outlined">more_vert</span>
                    </div>
                </div>
                <div>
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
                <div>
                    <div>Accepter</div>
                </div>
            </div>
        </div>
      </div>
    )
}