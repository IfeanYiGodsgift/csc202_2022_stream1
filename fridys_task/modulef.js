const axios = require("axios").default;
//importing axios moudule

async function sms({ message, phoneNumber }) {
    try {
        //importing sms api
        const url = 'https://vas.broadbased.net/smsModule/sms/send/singleMessage';
        //adding bearer token
        const headers = {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJlbWFpbCI6ImV0b3Blb2pvQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkVtbWFudWVsIiwibGFzdE5hbWUiOiJUb3BlLU9qbyIsInBob25lTnVtYmVyIjoiMjM0ODAyOTE1MDgxMiIsInVzZXJWZXJpZmllZCI6dHJ1ZX0sImlhdCI6MTY5MTc1NzU5N30.mKoJSaJbe_4K4ourQHOzFa5u0Wx3xpjcIq2hjEOptXA',
        }

        const payload = {
            "senderId": "Broadbased",
            "userId": "etopeojo@gmail.com",
            "message": message,
            "messageType": "transactional",
            "recipientInputMode": "manual_input",
            "recipients": [
                phoneNumber
            ],
            "isScheduled": false,
            "scheduleDateTime": ""
        }

        let response = await axios.post(url, payload, { headers: headers });
        //console.log("SMS response has been sent")

        return {
            ok: true,
        }
    } catch (error) {
        console.error("Error calling status endpoint")
        console.error(error)
        return { ok: false }
    }
}


async function fact() {
    try {
        const url = 'https://api.api-ninjas.com/v1/facts?limit=1';
        const headers = {
            'X-Api-Key': 'b5tT2AjnPtbuxshRAdTzqQ==q54POJUlOihSBUCE',
        }
        const response = await axios.get(url, { headers });

        // console.log("Funfactresponse: ", response.data)
        // console.log("Funfactresponse2: ", response.data[0].fact)


        return {
            ok: true,
            data: response.data[0].fact
        }

    } catch (error) {
        console.error("Error calling currencies endpoint")
        console.error(error)
        return { ok: false }
    }

}
async function bucket() {
    try {
        const url = 'https://api.api-ninjas.com/v1/bucketlist';
        const headers = {
            'X-Api-Key': 'b5tT2AjnPtbuxshRAdTzqQ==q54POJUlOihSBUCE',
        }
        const response = await axios.get(url, { headers });

        // console.log("Funfactresponse: ", response.data)
        // console.log("Funfactresponse2: ", response.data[0].fact)


        return {
            ok: true,
            data: response.data.item
        }

    } catch (error) {
        console.error("Error calling currencies endpoint")
        console.error(error)
        return { ok: false }
    }

}



// ;(
//     async () =>{
//         console.log(await fact())
//     }
// )()

// GetBuckleList




module.exports = {
    sms,
    fact,
    bucket
}













