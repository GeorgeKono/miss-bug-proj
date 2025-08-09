import { readJsonFile, writeJsonFile } from "./util.service.js"

const bugs = readJsonFile('./data/bug.json')

export const bugService = {
    query,
    getById,
    remove,
}

function query() {
    return Promise.resolve(bugs)
}

function getById(bugId) {
    const bug = bugs.find(bug => bug._id === bugId)
    return Promise.resolve(bug)
}

function remove(budId) {
    const idx = bugs.findIndex(bug => bug._id === budId)
    bugs.splice(idx, 1)

    return _saveBugs()
}

function _saveBugs() {
    return writeJsonFile('./data/bug.json', bugs)
}