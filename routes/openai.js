const Openai = require('openai')
const express = require('express');
const router = express.Router();
require("dotenv").config()
 

const openai = new Openai({
    apiKey: process.env.OPENAI_KEY
})
router.post('/generate-text', async (req, res) => {

    const prompt = req.body.prompt

    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ "role": "user", "content": prompt }],
        max_tokens: 100
    })
    res.send(response)
    console.log(response.choices[0].message)
})
module.exports = router;