import { Chat } from '@/components/chat'

export default async function Page() {
  // Authentication disabled - all users have full access
  return <Chat isGuest={false} />
}
