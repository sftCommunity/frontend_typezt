import { BentoGrid, BentoGridItem, EvervaultCard, PinContainer } from '@/components';
import { AnimatedPinDemo } from '@/components/example/3d-animated-pin';

const items = [
	{
		header: <AnimatedPinDemo />,
	},
	{
		header: <AnimatedPinDemo />,
	},
	{
		header: <AnimatedPinDemo />,
	},
	{
		header: <AnimatedPinDemo />,
	},
	{
		header: <AnimatedPinDemo />,
	},
];

export default function Feed() {
	return (
		<section>
			<div className='max-w-6xl mx-auto flex-wrap grid grid-cols-3'>
				{items.map((item, i) => (
					<PinContainer
						key={i}
						title='/ui.aceternity.com'
						href='https://twitter.com/mannupaaji'>
						<div className='grid-cols-1 flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[15rem] '>
							<h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>Aceternity UI</h3>
							<div className='text-base !m-0 !p-0 font-normal'>
								<span className='text-slate-500 '>Customizable Tailwind CSS and Framer Motion Components.</span>
							</div>
							<div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
						</div>
					</PinContainer>
				))}
			</div>
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
