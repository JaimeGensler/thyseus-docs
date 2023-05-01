import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { Icon } from ':ui';
import { useFlexSearch } from './useFlexSearch';

// Adapted from https://www.youtube.com/watch?v=-jix4KyxLuQ

type Props = {
	isOpen: boolean;
	setIsOpen(value: boolean): void;
};
export function SearchDialog({ isOpen, setIsOpen }: Props) {
	const router = useRouter();
	const { results, handleChange } = useFlexSearch();
	const [value, setValue] = useState('');

	return (
		<Transition.Root
			show={isOpen}
			as={React.Fragment}
			afterLeave={() => setValue('')}
		>
			<Dialog
				onClose={setIsOpen}
				className="fixed inset-0 overflow-y-auto py-1"
			>
				<Transition.Child
					as={React.Fragment}
					enter="duration-200 ease-out"
					enterFrom="opacity-0 backdrop-blur-none"
					enterTo="opacity-100 backdrop-blur"
					leave="duration-150 ease-in"
					leaveFrom="opacity-100 backdrop-blur"
					leaveTo="opacity-0 backdrop-blur-none"
				>
					<Dialog.Overlay className="fixed inset-0 bg-gray-900/50" />
				</Transition.Child>
				<Transition.Child
					enter="duration-200 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-150 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Combobox
						as="div"
						className="relative max-w-xl mx-auto bg-primary-light top-[25vh] shadow-2xl rounded-xl ring-2 ring-gray-300/50"
						onChange={(val: string) => {
							setIsOpen(false);
							router.push(val);
						}}
					>
						<div className="flex items-center px-4 py-2">
							<Icon
								type="search"
								className="w-6 h-6 text-gray-500"
							/>
							<Combobox.Input
								placeholder="Search..."
								value={value}
								className="w-auto h-8 bg-transparent text-gray-300 border-0 focus:ring-0 placeholder-gray-600"
								onChange={e => {
									setValue(e.target.value);
									handleChange(e.target.value);
								}}
							/>
						</div>
						<div className="w-full px-4 h-px">
							<div className="bg-gray-800 w-full h-full" />
						</div>
						{results.length > 0 && (
							<Combobox.Options
								static
								className="py-2 overflow-y-auto max-h-64"
							>
								{results.map(
									({ route, prefix, children, id }, i) => (
										<Combobox.Option key={id} value={i}>
											{prefix}
											<li>
												<Link
													href={route}
													data-index={i}
												>
													{children}
												</Link>
											</li>
										</Combobox.Option>
									),
								)}
							</Combobox.Options>
						)}
					</Combobox>
				</Transition.Child>
			</Dialog>
		</Transition.Root>
	);
}
