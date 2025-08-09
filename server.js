import express from 'express'
import { bugService } from './services/bug.service.js'

const app = express()

app.get('/', (req, res) => res.send('Hello there'))

app.get('/api/bug', (req, res) => {
    bugService.query()
        .then(bugs => res.send(bugs))
})

app.get('/api/bug/save', (req, res) => {
    const { title, severity, _id} = req.query

    const bugToSave = {
        _id,
        title,
        severity: +severity,
    }

    bugService.save(bugToSave)
        .then(savedBug => res.send(savedBug))
})

app.get('/api/bug/:bugId', (req, res) => {
    const bugId = req.params.bugId
    bugService.getById(bugId)
        .then(bug => res.send(bug))     
})

app.get('/api/bug/:bugId/remove', (req, res) => {
    const bugId = req.params.bugId
    bugService.remove(bugId)
        .then(() => res.send(`Bug ${bugId} deleted`))
})

app.listen(3030, () => console.log('Server ready at port 3030'))