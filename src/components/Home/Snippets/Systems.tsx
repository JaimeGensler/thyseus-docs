export function Systems() {
	return (
		<code data-language="ts" data-theme="default">
			<span className="block">
				<span style={{ color: 'var(--shiki-token-keyword)' }}>
					function
				</span>
				<span style={{ color: 'var(--shiki-color-text)' }}> </span>
				<span style={{ color: 'var(--shiki-token-function)' }}>
					move
				</span>
				<span style={{ color: 'var(--shiki-color-text)' }}>(query</span>
				<span style={{ color: 'var(--shiki-token-keyword)' }}>:</span>
				<span style={{ color: 'var(--shiki-color-text)' }}> </span>
				<span style={{ color: 'var(--shiki-token-function)' }}>
					Query
				</span>
				<span style={{ color: 'var(--shiki-token-function)' }}>
					Position
				</span>
				<span style={{ color: 'var(--shiki-token-punctuation)' }}>
					,
				</span>
				<span style={{ color: 'var(--shiki-color-text)' }}> </span>
				<span style={{ color: 'var(--shiki-token-function)' }}>
					Velocity
				</span>
				<span style={{ color: 'var(--shiki-color-text)' }}>
					{']>) {'}
				</span>
			</span>
			<span className="block">
				<span style={{ color: 'var(--shiki-color-text)' }}>{'\t'}</span>
				<span style={{ color: 'var(--shiki-token-keyword)' }}>for</span>
				<span style={{ color: 'var(--shiki-color-text)' }}> (</span>
				<span style={{ color: 'var(--shiki-token-keyword)' }}>
					const
				</span>
				<span style={{ color: 'var(--shiki-color-text)' }}> [</span>
				<span style={{ color: 'var(--shiki-token-constant)' }}>
					pos
				</span>
				<span style={{ color: 'var(--shiki-token-punctuation)' }}>
					,
				</span>
				<span style={{ color: 'var(--shiki-color-text)' }}> </span>
				<span style={{ color: 'var(--shiki-token-constant)' }}>
					vel
				</span>
				<span style={{ color: 'var(--shiki-color-text)' }}>] </span>
				<span style={{ color: 'var(--shiki-token-keyword)' }}>of</span>
				<span style={{ color: 'var(--shiki-color-text)' }}>
					{' query) {'}
				</span>
			</span>
			<span className="block">
				<span style={{ color: 'var(--shiki-color-text)' }}>
					{'\t\t'}
				</span>
				<span style={{ color: 'var(--shiki-token-constant)' }}>
					pos
				</span>
				<span style={{ color: 'var(--shiki-color-text)' }}>.x </span>
				<span style={{ color: 'var(--shiki-token-keyword)' }}>+=</span>
				<span style={{ color: 'var(--shiki-color-text)' }}> </span>
				<span style={{ color: 'var(--shiki-token-constant)' }}>
					vel
				</span>
				<span style={{ color: 'var(--shiki-color-text)' }}>.x;</span>
			</span>
			<span className="block">
				<span style={{ color: 'var(--shiki-color-text)' }}>
					{'\t\t'}
				</span>
				<span style={{ color: 'var(--shiki-token-constant)' }}>
					pos
				</span>
				<span style={{ color: 'var(--shiki-color-text)' }}>.y </span>
				<span style={{ color: 'var(--shiki-token-keyword)' }}>+=</span>
				<span style={{ color: 'var(--shiki-color-text)' }}> </span>
				<span style={{ color: 'var(--shiki-token-constant)' }}>
					vel
				</span>
				<span style={{ color: 'var(--shiki-color-text)' }}>.y;</span>
			</span>
			<span className="block">
				<span style={{ color: 'var(--shiki-color-text)' }}>
					{'\t\t'}
				</span>
				<span style={{ color: 'var(--shiki-token-constant)' }}>
					pos
				</span>
				<span style={{ color: 'var(--shiki-color-text)' }}>.z </span>
				<span style={{ color: 'var(--shiki-token-keyword)' }}>+=</span>
				<span style={{ color: 'var(--shiki-color-text)' }}> </span>
				<span style={{ color: 'var(--shiki-token-constant)' }}>
					vel
				</span>
				<span style={{ color: 'var(--shiki-color-text)' }}>.z;</span>
			</span>
			<span className="block">
				<span style={{ color: 'var(--shiki-color-text)' }}>
					{'\t}'}
				</span>
			</span>
			<span className="block">
				<span style={{ color: 'var(--shiki-color-text)' }}>{'}'}</span>
			</span>
		</code>
	);
}
