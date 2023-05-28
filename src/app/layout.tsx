import Chat from '@/components/Chat'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Book Chat',
	description: 'I&apos;m The Best Book Chat In The World'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<Providers>
				<body className={inter.className}>
					<Chat />
					{children}
				</body>
			</Providers>
		</html>
	)
}
