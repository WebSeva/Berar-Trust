import OpenAI from 'openai';
const fs = require('fs');
import path from 'path';
export default function handler(req, res) {
    const openai = new OpenAI({apiKey:process.env.OPENAI_KEY});
    const message = async ()=>{
        try{
         
            const query = req.query.query;
            
            
        let assistant_id = process.env.ASSISTANT_ID;
        let info = `
BARGAD (Bhartiye Alteriye Research Growth and Diversity) is a non-profit organization committed to sustainable development and environmental conservation in India. Its mission is to empower marginalized communities and promote ecological balance through sustainable practices. A key focus is on supporting small and marginal farmers with advanced agricultural training and resources under the Krushak Vikash Samiti (KVS) initiative.

One of BARGAD's notable projects includes the cleanup and restoration of Senva Pond near Vrindavan, Uttar Pradesh, in collaboration with Yamuna Rakshak Dal. This initiative, launched in August 2015, helped revive the habitat for hundreds of turtles and provided clean water to local villagers. The organization also promotes organic farming, community-managed grain banks, and women’s empowerment through income-generating activities with Self-Help Groups (SHGs) and Community-Based Organizations (CBOs).

BARGAD advocates for renewable energy solutions, such as portable biogas plants, recognized at the 2015 Biofuel Seminar by Shri Dharmendra Pradhan, and conducts training sessions on small-scale biogas technology across various states. The non-profit's mission is to foster sustainable development, environmental stewardship, and community upliftment throughout India.
         

Contact Details for the non profit, email - bargad.ngo@gmail.com , phone - +91 99111 97344, office - B- 59/C Shiv Park Khanpur , Delhi, India, Delhi
        `
         
        //   let thread = await openai.beta.threads.create();
        //   const message = await openai.beta.threads.messages.create(
        //     thread.id,
        //     {
        //     role: "user",
        //     content: query,
           
            
        //     }
        // );

        const completion = await openai.chat.completions.create({
          // assistant_id:assistant_id,
          model: 'gpt-4o', // Use the appropriate model
          // instructions:`You are a helpful assistant for a non-profit organization named Bargad Foundation and your name is WebSeva and you are created by Abhishek Kholiya. use the information provided to answer the questions. ${info} and only answer in maximum 2 lines`,
          messages: [
              { role: 'system', content: `You are a helpful assistant for a non-profit organization named Bargad NGO and your name is WebSeva and you are created by Abhishek Kholiya. use the information provided to answer the questions. ${info} and only answer in maximum 2 lines` },
              { role: 'user', content:`${query}`  }
          ],
          max_tokens: 100,
          temperature: 0.7,
      });

          const responseText = completion.choices[0].message.content;

          res.status(200).json({ message: `
              
                  
              ${responseText}` });
      



    // const run = openai.beta.threads.runs.stream(thread.id, {
    //     assistant_id: assistant_id,
    //     instructions:`You are a helpful assistant for a non-profit organization named Bargad Foundation and your name is WebSeva and you are created by Abhishek Kholiya. use the information provided to answer the questions. ${info} and only answer in maximum 2 lines`,
    //    model: "gpt-4o",

    //   })
    //   res.setHeader('Content-Type', 'text/event-stream');
    //   res.setHeader('Cache-Control', 'no-cache');
    //   res.setHeader('Connection', 'keep-alive');

    //   run
    //     .on('textCreated', (text) => {
    //       res.write(`data: ${JSON.stringify({ type: 'textCreated', text })}\n\n`);
    //     })
    //     .on('textDelta', (textDelta) => {
    //       res.write(`data: ${JSON.stringify({ type: 'textDelta', textDelta })}\n\n`);
    //     })
    //     .on('toolCallCreated', (toolCall) => {
    //       res.write(`data: ${JSON.stringify({ type: 'toolCallCreated', toolCall })}\n\n`);
    //     })
    //     .on('toolCallDelta', (toolCallDelta) => {
    //       res.write(`data: ${JSON.stringify({ type: 'toolCallDelta', toolCallDelta })}\n\n`);
    //     })
    //     .on('end', () => {
    //       res.write('data: [DONE]\n\n');
    //       res.end();
    //     })
    //     .on('error', (error) => {
    //       console.error('Error:', error);
    //       res.write('data: [ERROR]\n\n');
    //       res.end();
    //     });
      
                
        }catch(error){
            console.error('Message Error',error);
            res.status(500).json({ error: 'An error occurred while processing your request.' });

        }
       
    }
    message();
  }
  