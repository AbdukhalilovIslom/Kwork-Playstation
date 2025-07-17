import Guidance from '../components/Guidance';
import PsPlus from '../components/PsPlus';
import Hero from '../components/SubscriptionHero';

function SubscriptionPage() {
	return (
		<>
			<div className='overflow-x-hidden'>
				<Hero />
				<PsPlus />
				<Guidance />
			</div>
		</>
	);
}

export default SubscriptionPage;
