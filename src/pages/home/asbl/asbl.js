import styles from './asbl.module.scss';

import BasicCard from "../../../components/BasicCard/BasicCard";
import bistanclac from "../../../assets/images/bistanclac.png"
import crvi from '../../../assets/images/crvi.jpg'
import aufildulien from '../../../assets/images/aufildulien.png'

export default function Asbl() {
  return (
    <div className={`d-flex-column w-full h-full pr-20 pb-20 pl-20 overflow-y-auto ${styles.scroll}`}>
      <BasicCard
        title='Bistanclac'
        text='Nous faisons des ateliers pour sociabiliser les gens'
        img={bistanclac}
      />
      <BasicCard
        title='CRVI'
        text="Promotion d'échanges culturels"
        img={crvi}
      />
      <BasicCard
        title='Au fil du lien'
        text="Parrainage d'enfants en difficulté"
        img={aufildulien}
      />
    </div>
  );
}