import { Tab } from '@headlessui/react';

type TabsProps = React.PropsWithChildren<{
	items: string[];
}>;
export function Tabs({ items, children }: TabsProps) {
	return (
		<Tab.Group>
			<Tab.List>
				{items.map(item => (
					<Tab
						className="border-b text-gray-500 border-gray-500 px-3 pt-1.5 pb-1.5 ui-selected:pb-[5px] ui-selected:border-b-2 ui-selected:border-accent ui-selected:text-accent ui-selected:font-medium transition-colors"
						key={item}
					>
						{item}
					</Tab>
				))}
			</Tab.List>
			<Tab.Panels>{children}</Tab.Panels>
		</Tab.Group>
	);
}
Tabs.Panel = function TabTitle({ children }: React.PropsWithChildren) {
	return <Tab.Panel>{children}</Tab.Panel>;
};
