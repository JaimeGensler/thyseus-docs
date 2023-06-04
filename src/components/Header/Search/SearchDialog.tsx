import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { ButtonOrLink, Icon, KeyboardKey } from ':ui';
import { useFlexSearch, type SearchResult } from './useFlexSearch';

// Adapted from https://www.youtube.com/watch?v=-jix4KyxLuQ

type Props = {
	isOpen: boolean;
	setIsOpen(value: boolean): void;
};
export function SearchDialog({ isOpen, setIsOpen }: Props) {
	const router = useRouter();
	const { results, handleChange, load, clearResults } = useFlexSearch();
	const [query, setQuery] = useState('');

	useEffect(() => {
		load();
	}, [isOpen]);

	return (
		<Transition.Root
			show={isOpen}
			as={React.Fragment}
			afterLeave={() => {
				setQuery('');
				clearResults();
			}}
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
						className="relative max-w-xl mx-auto bg-gray-700 top-[25vh] shadow-2xl rounded-xl ring-2 ring-gray-300/50"
						onChange={(val: string) => {
							setIsOpen(false);
							router.push(val);
						}}
					>
						<div className="flex items-center px-4 py-2 text-gray-200">
							<Icon type="search" className="w-6 h-6" />
							<Combobox.Input
								placeholder="Search..."
								value={query}
								className="flex-1 h-8 bg-transparent border-0 focus:ring-0 placeholder-gray-500"
								onChange={e => {
									setQuery(e.target.value);
									handleChange(e.target.value);
								}}
							/>
							<KeyboardKey keyName="ESC" />
						</div>
						{results.length > 0 && (
							<Combobox.Options
								static
								className="mx-4 overflow-y-auto max-h-64 border-t border-gray-500 divide-y divide-gray-600"
							>
								{results.map((result, i) => (
									<Result {...result} value={i} key={i} />
								))}
							</Combobox.Options>
						)}
						{query && results.length === 0 && (
							<p className="mx-4 border-t border-gray-600 text-sm text-gray-400 py-4">
								No results found.
							</p>
						)}
					</Combobox>
				</Transition.Child>
			</Dialog>
		</Transition.Root>
	);
}

const getHighlightedText = (text: string, highlight: string) =>
	text.split(new RegExp(`(${highlight})`, 'gi')).map((part, index) =>
		part.toLowerCase() === highlight.toLowerCase() ? (
			<mark key={index} className="bg-accent/10 text-accent">
				{part}
			</mark>
		) : (
			<span key={index}>{part}</span>
		),
	);

function Result({
	value,
	route,
	match,
	context,
	pageTitle,
	title,
}: SearchResult & { value: number }) {
	return (
		<Combobox.Option className="py-1 flex" value={route}>
			<div className="py-1.5 px-2 ui-active:bg-accent/25 rounded-lg w-full">
				<div className="text flex items-center gap-1 text-gray-400">
					<span className="text-white">{pageTitle}</span>
					{pageTitle !== title && (
						<>
							<Icon type="chevron-right" className="w-2 h-2" />
							<span className="text-xs flex-1 truncate">
								{title}
							</span>
						</>
					)}
				</div>
				<div className="text-sm">
					{getHighlightedText(context, match)}
				</div>
			</div>
		</Combobox.Option>
	);
}
