'use client'

import { MessagesProvider } from '@/context/messages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			<MessagesProvider>{children}</MessagesProvider>
		</QueryClientProvider>
	)
}
