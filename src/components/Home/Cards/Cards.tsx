import { Icon } from ':ui';
import { Card } from './Card';

export function Cards() {
	return (
		<div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 desktop:gap-16 px-2">
			<Card>
				<div className="w-16 h-16 text-accent">
					<Icon
						type="paint-brush"
						strokeWidth={1}
						className="w-16 h-16"
					/>
				</div>
				<Card.Title>Expressive</Card.Title>
				<Card.Content>
					An intuitive and ergonomic API that provides unparalleled DX
					so you can build apps with minimal overhead and maximum
					flexibility.
				</Card.Content>
			</Card>
			<Card>
				<div className="w-16 h-16 text-accent">
					<Icon
						type="lightning"
						strokeWidth={1}
						className="w-16 h-16"
					/>
				</div>
				<Card.Title>Powerful</Card.Title>
				<Card.Content>
					Multithreading-capable architecture and code transformations
					enable you to build lightning-fast applications without
					compromising on control.
				</Card.Content>
			</Card>
			<Card>
				<div className="w-16 h-16 text-accent">
					<Icon type="puzzle" strokeWidth={1} className="w-16 h-16" />
				</div>
				<Card.Title>Extensible</Card.Title>
				<Card.Content>
					Built with rich plugin capabilities, Thyseus accommodates
					all your ECS needs and can integrate seamlessly with
					third-party libraries.
				</Card.Content>
			</Card>
		</div>
	);
}
