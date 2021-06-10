import { NextApiRequest, NextApiResponse } from 'next';


export default async function (req, res) {
  try {

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
      const respMsg = await responseWA.json()
      if (respMsg.status === 'Complete') {
        console.log('yea comlete!')
      }
    }

    await msgsend(req.body.do, req.body.text, req.body.from, req.body.to)

    res.status(201)
    res.json({status: 'Complete'})
  } catch(e) {
    res.status(501)
    res.json({status: 'Failed'})
  }

}
