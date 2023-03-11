import CardSwipe from '../../../components/CardSwipe/CardSwipe';
import styles from './requests.module.scss';
import garden from '../../../assets/images/garden.jpg';

export default function Requests({}) {
    return (
      <div className='d-flex-row h-full' style={{maxHeight: '100%'}}>
        <CardSwipe imgPresentation={garden} />
        {/* <CardSwipe imgPresentation={garden} /> */}
      </div>
    );
}
