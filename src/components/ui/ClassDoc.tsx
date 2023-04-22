import React from 'react';
import {} from 'nextra-theme-docs';

type ClassProps = {
	name: React.ReactNode;
};
export function Class({ name, children }: React.PropsWithChildren<ClassProps>) {
	return (
		<section>
			{name}
			{children}
		</section>
	);
}
Class.Name = function Name({ children }: React.PropsWithChildren<{}>) {
	return <h2>{children}</h2>;
};
function Method({ children }: React.PropsWithChildren<{}>) {
	return <div>{children}</div>;
}
Method.Name = function MethodName({ children }: React.PropsWithChildren<{}>) {
	return <div>{children}</div>;
};
Class.Method = Method;
