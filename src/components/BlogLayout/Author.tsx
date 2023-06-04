import Image from 'next/image';

type Author = {
	photo: string;
	name: string;
	subtitle: string;
};

const authors: Record<string, Author> = {
	jaime: {
		photo: '/jaime.jpg',
		name: 'Jaime',
		subtitle: 'Author of Thyseus',
	},
};

type Props = {
	id: string;
};
export function Author({ id }: Props) {
	const { photo, name, subtitle } = authors[id];
	return (
		<div className="flex items-center gap-2">
			<Image
				className="object-fit rounded-full"
				width={42}
				height={42}
				src={photo}
				alt={name}
			/>
			<div>
				<p className="text-sm text-gray-300">{name}</p>
				<p className="text-xs text-gray-400 italic">{subtitle}</p>
			</div>
		</div>
	);
}
