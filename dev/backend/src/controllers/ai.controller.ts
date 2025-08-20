import { Request, Response } from 'express';
import { OpenAI } from 'openai';

const openai = new OpenAI();

export const chatAssistant = async (req: Request, res: Response) => {
  const { messages } = req.body;
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a BC/ROSCA committee assistant.' },
      ...messages
    ]
  });
  res.json(completion.choices[0].message);
};


