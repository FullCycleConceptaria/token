import BasicCard from "../../../components/BasicCard/BasicCard";
import ismv from '../../../assets/images/ismv.svg'
import hodimont from '../../../assets/images/hodimont.png'
import rechain from '../../../assets/images/rechain.jpg'

export default function Groups() {
  return (
    <div className='w-full h-full pr-20 pb-20 pl-20'>
      <BasicCard
        title='Groupe de la section informatique'
        text='Juste un groupe de classe comme les autres'
        img={ismv}
      />
      <BasicCard
        title='Hodimont'
        text="Groupe de la rue d'Hodimont et du terrain d'aventure"
        img={hodimont}
      />
      <BasicCard
        title='Petit-Rechain'
        text="La Rue Petit-Rechain et son calme absolu"
        img={rechain}
      />
    </div>
  );
}