import { SharpStar } from 'components/Home/Star';
import { Wave } from './Wave';

const randomBetween = (min: number, max: number) =>
	Math.random() * (max - min) + min;

export function Home() {
	return (
		<div className="flex flex-col h-screen">
			<header className="sticky top-0 z-10 h-16 bg-opacity-75 backdrop-filter backdrop-blur-lg">
				Header
			</header>
			<div className="flex flex-1">
				<nav className="sticky top-16 h-full w-64 overflow-y-auto">
					Nav
				</nav>
				<div className="flex flex-col flex-1 overflow-hidden">
					<div
						className="flex-1 h-full overflow-y-auto"
						style={{ height: 2000 }}
					>
						Content
					</div>
					<aside className="sticky top-16 h-full w-64 overflow-y-auto">
						TOC
					</aside>
				</div>
			</div>
		</div>
	);
}
// export function Home() {
// 	return (
// 		<div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
// 			<h1 className="text-6xl tracking-widest">THYSEUS</h1>
// 			{Array.from({ length: 100 }, () => (
// 				<SharpStar
// 					className="w-3 h-3 absolute text-yellow-100 animate-twinkle"
// 					style={{
// 						top: `${randomBetween(0, 100)}%`,
// 						left: `${randomBetween(0, 100)}%`,
// 						transform: `rotateZ(${randomBetween(
// 							0,
// 							360,
// 						)}deg) scale(${randomBetween(0, 1)})`,
// 						filter: 'blur(1px)',
// 						animationDelay: `${randomBetween(0, 5)}s`,
// 					}}
// 				/>
// 			))}
// 			<Wave amplitude={50} />
// 		</div>
// 	);
// }
