
const Team = require('../models/teamSchema')

async function registerMember(req, res) {
    try {
        const { firstname, lastname, email, phone, university, discipline, shortbio } = req.body
        const imageFile = req.file;
        // Convert image file to Base64 string
        const imageBase64 = imageFile.buffer.toString('base64');

        // check team member already exists email
        const memberExist = await Team.findOne({ email })
        if (memberExist) {
            return res.status(400).json({ success, error: 'already member, provide unique email' })
        } else {
            // create new user
            const regMemberDoc = new Team({
                firstname, lastname, email, phone, university, discipline, shortbio, profileImage: imageBase64
            })
            regMemberDoc.save()
                .then(result =>
                     res.status(201).send({ msg: "Member Register Successfully", result }))
                .catch(error => res.status(400).send({ msg: "Member not Registered", error }))
        }
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error: ", error })
    }
}

async function getMembers(req, res) {
    try {
        const allMembers = await Team.find({})
        res.status(201).send({ msg: "Total Members", allMembers })
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error: ", error })
    }
}

module.exports = {
    registerMember,
    getMembers
}