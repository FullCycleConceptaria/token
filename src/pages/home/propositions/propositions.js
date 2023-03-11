import CardSwipe from '../../../components/CardSwipe/CardSwipe';
import styles from './propositions.module.scss';
import garden from '../../../assets/images/garden.jpg';
import userPicture from '../../../assets/images/profile-picture.svg';

export default function Propositions({}) {
  return (
    <div
      className={`d-flex-row h-full overflow-x-scroll ${styles.scroll}`}
      style={{ maxHeight: '100%' }}
    >
      <CardSwipe
        imgPresentation={garden}
        imgProfile={userPicture}
        date={`Aujourd'hui 15:00`}
        username='Amélie Dubois'
        title='Je peux venir en aide pour déblayer un jardin!'
        description={`Je m'y connais en plante et en jardin, donc si vous avez besoin d'aide pour déblayer votre jardin, je suis là !`}
      />
      <CardSwipe imgPresentation={garden} />
    </div>
  );
}
