import { Combobox, Dialog } from '@headlessui/react';
import { SearchIcon } from './SearchIcon';

type Props = {
	isOpen: boolean;
	onClose(value: boolean): void;
};
export function SearchDialog({ isOpen, onClose }: Props) {
	return (
		<Dialog
			open={isOpen}
			onClose={onClose}
			className="fixed inset-0 overflow-y-auto py-1"
		>
			<Dialog.Overlay className="fixed inset-0 bg-gray-900/50 backdrop-blur" />
			<Combobox
				as="div"
				className="relative max-w-xl mx-auto bg-gray-300 top-[25vh] shadow-2xl rounded-xl ring-2 ring-black/5"
			>
				<div className="flex items-center px-4 py-2">
					<SearchIcon className="w-6 h-6 text-gray-500" />
					<Combobox.Input
						placeholder="Search..."
						className="w-auto h-8 bg-transparent border-0 focus:ring-0 text-gray-800 placeholder-gray-400"
					/>
				</div>
				<div className="w-full px-4 h-px">
					<div className="bg-gray-800 w-full h-full" />
				</div>
				<Combobox.Options
					static
					className="py-2 overflow-y-auto max-h-64"
				>
					{Array.from({ length: 10 }, (_, i) => (
						<Combobox.Option
							key={i}
							value={i}
							className="px-4 py-2"
						>
							Option {i}
						</Combobox.Option>
					))}
				</Combobox.Options>
			</Combobox>
		</Dialog>
	);
}
