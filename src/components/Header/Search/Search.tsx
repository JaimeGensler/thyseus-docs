import { useState } from 'react';
import { ButtonOrLink, Icon, KeyboardKey } from ':ui';
import { SearchDialog } from './SearchDialog';

type Props = { className?: string };
export function Search({ className }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={className}>
			<ButtonOrLink
				className="group flex gap-2 items-center justify-between bg-gray-700 hocus:text-white hocus:bg-gray-600 transition-colors rounded-md py-1.5 text-sm px-2 min-w-[14rem]"
				onClick={() => setIsOpen(true)}
			>
				<span className="flex items-center gap-1">
					<Icon type="search" className="w-4 h-4" />
					<span className="leading-[0.875rem] pr-8">
						Search docs...
					</span>
				</span>

				<KeyboardKey
					keyName="⌘ K"
					alternateKeys={['/']}
					onPressKey={e => {
						e.preventDefault();
						setIsOpen(x => !x);
					}}
				/>
			</ButtonOrLink>

			<SearchDialog isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
}
