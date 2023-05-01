export function Card({ children }: any) {
	return (
		<section className="bg-primary-light py-4 px-4 rounded-xl flex flex-col items-center gap-2 hover:bg-primary-extralight transition-colors">
			{children}
		</section>
	);
}

Card.Title = function CardTitle({ children }: React.PropsWithChildren) {
	return (
		<h2 className="relative w-full font-semibold text-2xl text-white tracking-wide flex items-center justify-center gap-4">
			{children}
		</h2>
	);
};
Card.Content = function CardContent({ children }: React.PropsWithChildren) {
	return <div>{children}</div>;
};
