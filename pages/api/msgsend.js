import { NextApiRequest, NextApiResponse } from 'next';


export default async function (req, res) {
  try {
    const doing = req.body.do
    const textMsg = req.body.text
    const from_phone_number = req.body.from
    const to_phone_number = req.body.to

    async function msgsend(doing, textMsg, from_phone_number, to_phone_number) {
      const whatsApp_URL = 'http://194.87.103.68:5555/api/sendWhatsapp'
      const responseWA = await fetch(whatsApp_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          do: doing,
          text: textMsg,
          from: from_phone_number,
          to: to_phone_number,
         }),
      })
    }

    msgsend(doing, textMsg, from_phone_number, to_phone_number)

    res.status(201)
    res.json({status: 'Complete'})
  } catch(e) {
    res.status(501)
    res.json({status: 'Failed'})
  }

}
