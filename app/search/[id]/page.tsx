import { notFound } from 'next/navigation'

import { UIMessage } from 'ai'

import { loadChat } from '@/lib/actions/chat'

import { Chat } from '@/components/chat'

export const maxDuration = 60

// Anonymous user ID for all requests
const userId = 'anonymous-user'

export async function generateMetadata(props: {
  params: Promise<{ id: string }>
}) {
  const { id } = await props.params

  const chat = await loadChat(id, userId)

  if (!chat) {
    return { title: 'Search' }
  }

  return {
    title: chat.title.toString().slice(0, 50) || 'Search'
  }
}

export default async function SearchPage(props: {
  params: Promise<{ id: string }>
}) {
  const { id } = await props.params

  const chat = await loadChat(id, userId)

  if (!chat) {
    notFound()
  }

  const messages: UIMessage[] = chat.messages

  // Authentication disabled - all users have full access
  return <Chat id={id} savedMessages={messages} isGuest={false} />
}
