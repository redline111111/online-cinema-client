import Link from 'next/link'
import { FC } from 'react'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block text-4xl text-primary font-bold">
				LOGO
			</a>
		</Link>
	)
}

export default Logo
