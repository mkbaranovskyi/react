import React, { useState } from 'react'

const STATUS = {
	HOVERED: 'hovered',
	NORMAL: 'normal'
}

const Link: React.FC<{ page: string; children: React.ReactNode }> = ({
	page,
	children
}) => {
	const [status, setStatus] = useState<string>(STATUS.NORMAL)

	const onMouseEnter = () => {
		setStatus(STATUS.HOVERED)
	}

	const onMouseLeave = () => {
		setStatus(STATUS.NORMAL)
	}

	return (
		<a
			className={status}
			href={page || '#'}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</a>
	)
}

export default Link
