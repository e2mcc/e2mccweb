import * as dotenv from 'dotenv'
import type { SendMessageOptions } from 'chatgpt'
import { ChatGPTAPI } from 'chatgpt'
import { sendResponse } from './utils'

export interface ChatContext {
  conversationId?: string
  parentMessageId?: string
}

dotenv.config()

const apiKey = process.env.OPENAI_API_KEY

if (apiKey === undefined)
  throw new Error('OPENAI_API_KEY is not defined')

/**
 * More Info: https://github.com/transitive-bullshit/chatgpt-api
 */
const api = new ChatGPTAPI({ 
	apiKey, 
	completionParams: {
		model: 'gpt-3.5-turbo',
		temperature: 0.7,
		top_p: 0.8
	},
	debug: false 
})

async function chatReply(
  message: string,
  lastContext?: { conversationId?: string; parentMessageId?: string },
) {
  if (!message)
    return sendResponse({ type: 'Fail', message: 'Message is empty' })

  try {
    let options: SendMessageOptions = {}

    if (lastContext)
      options = { ...lastContext }

    const response = await api.sendMessage(message, { ...options })

    return sendResponse({ type: 'Success', data: response })
  }
  catch (error: any) {
    return sendResponse({ type: 'Fail', message: error.message })
  }
}

export { chatReply }
