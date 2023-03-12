import CardSwipe from '../../../components/CardSwipe/CardSwipe';
import styles from './requests.module.scss';
import garden2 from '../../../assets/images/garden2.jpg';
import garden3 from '../../../assets/images/garden3.jpg';
import userPicture from '../../../assets/images/profile-picture.svg';

export default function Requests({}) {
  return (
    <div
      className={`d-flex-row h-full overflow-x-scroll ${styles.scroll}`}
      style={{ maxHeight: '100%' }}
    >
      <CardSwipe
        imgPresentation={garden2}
        imgProfile={userPicture}
        date={`Aujourd'hui 15:00`}
        username='Amélie Dubois'
        title="Besoin d'aide pour réarranger mon jardin"
        description={`Mon jardin est dans un piteux état et j'aimerais avoir un peu d'aide car je me fais vieille et je manque de temps.`}
      />
      <CardSwipe imgPresentation={garden3}
      imgProfile={userPicture}
      date={`Hier 9h17`}
      username='Jules Puissant'
      title="Besoin d'aide pour installer ma balancelle !!!"
      description={`Je n'arrive pas à monter ma balancelle, est-ce que quelqu'un peut venir m'aider ?`}
       />
    </div>
  );
}
