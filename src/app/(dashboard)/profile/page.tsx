import { BentoGrid, BentoGridItem, EvervaultCard } from '@/components';
import {
	IconArrowWaveRightUp,
	IconBoxAlignRightFilled,
	IconBoxAlignTopLeft,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from '@tabler/icons-react';

const Skeleton = () => (
	<div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
);

const items = [
	{
		title: 'The Dawn of Innovation',
		description: 'Explore the birth of groundbreaking ideas and inventions.',
		header: <EvervaultCard text='hover' />,
		icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
	},
	{
		title: 'The Digital Revolution',
		description: 'Dive into the transformative power of technology.',
		header: <Skeleton />,
		icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
	},
	{
		title: 'The Art of Design',
		description: 'Discover the beauty of thoughtful and functional design.',
		header: <Skeleton />,
		icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
	},
	{
		title: 'The Power of Communication',
		description: 'Understand the impact of effective communication in our lives.',
		header: <Skeleton />,
		icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />,
	},
	{
		title: 'The Pursuit of Knowledge',
		description: 'Join the quest for understanding and enlightenment.',
		header: <Skeleton />,
		icon: <IconArrowWaveRightUp className='h-4 w-4 text-neutral-500' />,
	},
];

export default function Profile() {
	return (
		<section>
			<BentoGrid className='max-w-4xl mx-auto'>
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						icon={item.icon}
						className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
					/>
				))}
			</BentoGrid>
			{/* <div className='border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]'>
				<Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
				<Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
				<Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
				<Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

				<EvervaultCard text='hover' />

				<h2 className='dark:text-white text-black mt-4 text-sm font-light'>
					Hover over this card to reveal an awesome effect. Running out of copy here.
				</h2>
				<p className='text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5'>
					Watch me hover
				</p>
			</div> */}
		</section>
	);
}
