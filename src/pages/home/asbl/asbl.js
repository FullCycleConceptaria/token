import BasicCard from "../../../components/BasicCard/BasicCard";
import bistanclac from "../../../assets/images/bistanclac.png"

export default function Asbl() {
  return (
    <div className='w-full h-full pr-20 pb-20 pl-20'>
      <BasicCard
        title='Bistanclac'
        text='Nous faisons des ateliers pour sociabiliser les gens'
        img={bistanclac}
      />
      <BasicCard
        title='CRVI'
        text="Promotion d'échanges culturels"
      />
      <BasicCard
        title='Au fil du lien'
        text="Parrainage d'enfants en difficulté"
      />
    </div>
  );
}