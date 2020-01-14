const messages = []
let id = 0

//Endpoints

module.exports = {
    readMessages: (req,res) => {
        res.status(200).send(messages)
    },
    createMessages: (req,res) => {
        const {text, time} = req.body
        let message = {
            id,
            text,
            time
        }
        messages.push(message)
        id++
        res.status(200).send(messages)
    },
    updateMessages: (req,res) => {
        const {id} = req.params
        const {text, time} = req.body
        console.log(req.body)
        console.log(req.params)
        let index = null
        console.log(messages)
        messages.forEach((val, i) => {
            if(val.i === +id){
                index = i
            }
        })
        messages[index] = {
            id: id,
            text: text || messages[index].text,
            time: messages[index].time
        }
        console.log(messages[index])
        res.status(200).send(messages)
    },
    deleteMessages: (req,res) => {
        const {id} = req.params
        let index = messages.findIndex(e => e.id === +id)
        messages.splice(index, 1)
        res.status(200).send(messages)
    }
}