import CardSwipe from '../../../components/CardSwipe/CardSwipe';
import styles from './requests.module.scss';
import garden from '../../../assets/images/garden.jpg';
import userPicture from '../../../assets/images/profile-picture.svg';

export default function Requests({}) {
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
        title='bonjour je peux venir en aide pour déblayer un jardin!'
        description={`mon jardin est dans un piteux état et j'aimerais avoir un peu d'aide car je me fais vieille et je manque de temps.`}
      />
      <CardSwipe imgPresentation={garden} />
    </div>
  );
}
