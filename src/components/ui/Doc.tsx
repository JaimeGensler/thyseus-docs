import { ButtonOrLink } from './ButtonOrLink';
import { Heading } from './Heading';
import { Link } from './Link';

export function Doc() {
	return (
		<section>
			<Heading id="class-entity" level={3}>
				<span className="group-hover:bg-gray-300 bg-gray-700/50 py-0.5 px-1.5 rounded-md">
					<span className="text-[--shiki-token-keyword]">class </span>
					<span className="text-[--shiki-token-function]">
						Entity
					</span>
				</span>
			</Heading>
			<div className="border-l border-gray-700 pl-2 ml-1">
				<h4>index</h4>
				<h4>generation</h4>
				<h4>id</h4>
				<h4></h4>
			</div>
		</section>
	);
}
