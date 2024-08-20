import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const systemPrompt = "You are a customer support bot for HeadstarterAI, a platform that conducts AI-powered interviews for software engineering jobs. Your role is to assist users with any questions or issues they may have regarding the platform and its services."

export async function POST(req) {
    try {
        const openai = new OpenAI(process.env.OPENAI_API_KEY) // Ensure you have the API key in your environment variables
        const data = await req.json()

        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: 'system', content: systemPrompt
                },
                ...data,
            ],
            model: 'gpt-4o-mini',  // or 'gpt-4o-mini' if available
            stream: true,
        })

        const stream = new ReadableStream({
            async start(controller) {
                const encoder = new TextEncoder()
                try {
                    for await (const chunk of completion) {
                        const content = chunk.choices[0].delta.content
                        if (content) {
                            const text = encoder.encode(content)
                            controller.enqueue(text)
                        }
                    }
                } catch (err) {
                    console.error('Error streaming completion:', err)
                    controller.error(err)
                } finally {
                    controller.close()
                }
            }
        })

        return new Response(stream, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
            },
        })
    } catch (error) {
        console.error('Error in API route:', error)
        return NextResponse.json({ error: 'An error occurred while processing your request', details: error.message }, { status: 500 })
    }
}
