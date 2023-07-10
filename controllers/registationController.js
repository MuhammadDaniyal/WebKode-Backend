
const Registration = require('../models/registerationSchema')
const generateMail = require('../helper/generateMail')

async function teamRegisteration(req, res) {
    const { email, teamname } = req.body
    try {
        // check team member already exists email
        const teamExist = await Registration.findOne({ email })
        if (teamExist) {
            return res.status(400).json({ success, error: 'already team registered' })
        } else {
            // create new user
            const regTeamDoc = new Registration(req.body)
            regTeamDoc.save()
                .then(result => {
                    res.status(201).send({ msg: "Team Register Successfully", result })
                    if (result) {
                        generateMail(teamname, email)
                    }
                })
                .catch(error => res.status(400).send({ msg: "Team not Registered", error }))
        }
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error: ", error })
    }
}

async function getAllTeams(req, res) {
    try {
        const allTeams = await Registration.find({})
        res.status(201).send({ msg: "Total Teams", allTeams })
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error: ", error })
    }
}

module.exports = {
    teamRegisteration,
    getAllTeams
}