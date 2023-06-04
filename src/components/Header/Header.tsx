import Link from 'next/link';
import { Icon, IconLogo, Logo } from ':ui';
import { useThemeConfig } from ':hooks';
import clsx from 'clsx';
import { Search } from './Search';
import { MobileNav } from './MobileNav';

type Props = {
	className?: string;
	hideLogo?: boolean;
};

export function Header({ className, hideLogo = false }: Props) {
	const { projectRepository } = useThemeConfig();

	return (
		<header
			className={clsx(
				'h-16 w-full flex-shrink-0 shadow-lg border-b px-2',
				className,
			)}
		>
			<div className="max-w-screen-desktop h-full mx-auto flex items-center justify-between py-1 gap-4">
				<div className="flex h-full">
					<a
						href="#main"
						className="sr-only hocus:not-sr-only flex items-center underline px-1"
					>
						Skip to content
					</a>
					<Link
						href="/"
						className="h-full overflow-hidden text-white"
					>
						<IconLogo
							className={clsx(
								hideLogo ? 'opacity-0' : 'opacity-100',
								'h-full p-2 block tablet:hidden',
							)}
							aria-hidden
						/>
						<Logo
							className={clsx(
								hideLogo ? 'opacity-0' : 'opacity-100',
								'h-full hidden tablet:block transition-opacity',
							)}
							aria-hidden
						/>
						<span className="sr-only">Thyseus</span>
					</Link>
				</div>

				<div className="flex items-center gap-5">
					<nav className="hidden tablet:block">
						<ul className="flex text-sm gap-2">
							<NavItem href="/docs">Docs</NavItem>
							<NavItem href="/blog/v0_12_release">Blog</NavItem>
						</ul>
					</nav>
					<Search className="hidden tablet:block" />
					<MobileNav />
					<a
						className="hocus:text-white transition-colors p-1.5"
						href={projectRepository}
					>
						<Icon type="github" className="w-6 h-6" />
						<span className="sr-only">GitHub</span>
					</a>
				</div>
			</div>
		</header>
	);
}

type NavItemProps = React.PropsWithChildren<{ href: string }>;
function NavItem({ href, children }: NavItemProps) {
	return (
		<li>
			<Link
				className="px-4 py-2 text-xs font-semibold uppercase tracking-wider hocus:text-white hocus:underline"
				href={href}
			>
				{children}
			</Link>
		</li>
	);
}
