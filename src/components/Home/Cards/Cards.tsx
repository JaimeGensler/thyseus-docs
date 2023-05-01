import { Icon } from ':ui';
import { Card } from './Card';

export function Cards() {
	return (
		<div className="grid grid-cols-3 gap-16 bg-primary my-24">
			<Card>
				<Card.Title>
					<div className="w-8 h-8 left-0 top-0 absolute text-accent">
						<Icon
							type="puzzle"
							strokeWidth={1}
							className="absolute w-8 h-8"
						/>
						<Icon
							type="puzzle"
							strokeWidth={1}
							className="absolute w-8 h-8 blur-[2px]"
						/>
					</div>
					<span>Ergonomic</span>
				</Card.Title>
				<Card.Content>
					Designed to be intuitive and expressive to provide an
					unparalleled developer experience; build complex apps with
					minimal overhead and maximum flexibility.
				</Card.Content>
			</Card>
			<Card>
				<Card.Title>Powerful</Card.Title>
				<Card.Content>
					Archetypal storage, compiler optimizations, and
					multithreading-capable architecture enable developers to
					easily build blazing-fast applications without compromising
					on control.
				</Card.Content>
			</Card>
			<Card>
				<Card.Title>Extensible</Card.Title>
				<Card.Content>
					Favoring composition over configuration with rich plugin
					capabilities, Thyseus accommodates any ECS needs and can
					integrate with third-party libraries.
				</Card.Content>
			</Card>
		</div>
	);
}
