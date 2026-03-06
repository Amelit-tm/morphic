import { createOpenAI } from '@ai-sdk/openai'
import { createProviderRegistry, LanguageModel } from 'ai'

// OnlySq API configuration
const ONLYSQ_API_KEY = 'sq-kv2Q5a0EegA9OvhwanCBDvT4qQL9QfMO'
const ONLYSQ_BASE_URL = 'https://api.onlysq.ru/ai/openai/'

// Create OnlySq provider using OpenAI-compatible interface
const onlysq = createOpenAI({
  apiKey: ONLYSQ_API_KEY,
  baseURL: ONLYSQ_BASE_URL
})

// Build providers object - only OnlySq
const providers: Record<string, any> = {
  onlysq
}

export const registry = createProviderRegistry(providers)

export function getModel(model: string): LanguageModel {
  return registry.languageModel(
    model as Parameters<typeof registry.languageModel>[0]
  )
}

export function isProviderEnabled(providerId: string): boolean {
  // OnlySq is always enabled
  return providerId === 'onlysq'
}
