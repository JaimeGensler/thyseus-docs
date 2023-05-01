import { Logo } from ':ui';
import { Wave } from './Wave';
import { Glow } from './Glow';
import { Stars } from './Stars';
import Link from 'next/link';

export function Landing() {
	return (
		<div
			style={{
				background:
					'linear-gradient(180deg, #000000 0%, #020C11 25%, #032E44 80%, rgba(0, 0, 0, 0) 100%)',
			}}
			className="relative w-full h-screen overflow-hidden flex justify-center"
		>
			<div className="absolute top-16 flex flex-col items-center justify-center z-20">
				<h1 className="sr-only">Thyseus</h1>
				<Logo className="h-48" />
				<p className="max-w-3xl text-center -mt-4">
					A <span className="font-medium text-white">simple</span>,
					<span className="font-medium text-white">powerful</span>,
					and{' '}
					<span className="font-medium text-white">ergonomic</span>{' '}
					ECS library for game development -
				</p>
				<p>built entirely in Typescript</p>
				<Link
					href="/docs"
					className="rounded-lg ring ring-accent text-accent py-3 px-8 mt-8"
				>
					Get Started
				</Link>
			</div>
			<Stars className="absolute left-0 top-0" />

			<Glow className="absolute w-full left-0 bottom-0" />

			{/* Waves are ordered back-to-front */}
			<Wave className="absolute w-[120%] left-[15%] -bottom-7 -scale-x-[1] text-[#00346A] animate-waves animate-delay-2" />
			<Wave className="absolute w-[115%] -left-[10%] -bottom-8 -scale-x-[1] text-[#002D5B] animate-waves animate-delay-4" />
			<Wave className="absolute w-[119%] -left-[14%] -bottom-16 text-[#002851] animate-waves animate-delay-8" />
			<Wave className="absolute w-[118%] -left-[2%] -bottom-[4.5rem] -scale-x-[1] text-[#002143] animate-waves animate-delay-10" />
			<Wave className="absolute w-[116%] -left-[13%] -bottom-24 text-[#001933] animate-waves animate-delay-12" />
			<Wave className="absolute w-[122%] -left-[2%] -bottom-32 -scale-x-[1] text-primary animate-waves" />
		</div>
	);
}
