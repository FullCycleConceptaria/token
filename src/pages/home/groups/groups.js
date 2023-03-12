import BasicCard from "../../../components/BasicCard/BasicCard";

export default function Groups() {
  return (
    <div className='w-full h-full pr-20 pb-20 pl-20'>
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
        text="Rue Petit-Rechain et son calme absolu"
      />
    </div>
  );
}