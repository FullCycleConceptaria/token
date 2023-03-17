import styles from './groups.module.scss'

import BasicCard from "../../../components/BasicCard/BasicCard";

export default function Groups() {
  return (
    <div
      className={` d-flex-column w-full h-full pr-20 pb-20 pl-20 overflow-y-auto ${styles.scroll}`}
      style={{ maxHeight: '100%' }}
    >
      <BasicCard
        title='Groupe de la section informatique'
        text='Juste un groupe de classe comme les autres'
      />
      <BasicCard
        title='Hodimont'
        text="Groupe de la rue d'Hodimont et du terrain d'aventure"
      />
      <BasicCard
        title='Petit-Rechain'
        text='Rue Petit-Rechain et son calme absolu'
      />
    </div>
  );
}