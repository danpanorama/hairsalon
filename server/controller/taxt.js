async function textm(req ,res, next){
    const Vonage = require('nexmo')
    const from = req.body.phone
    const to = "972534273529"
    // const to = '972549817880'
    const text = req.body.txt
    console.log(req.body)
    const vonage = new Vonage({
      apiKey: "84dd5389",
      apiSecret: "UhVinlagQ2ChaODU"
    })
    
    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
                res.json({msg:'ההודעה נשלחה בהצלחה'})
            } else {
                
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
           res.json({msg:'סליחה אך ההודעה לא נשלחה משום מה'})
            }
        }
    })
}

module.exports.textm = textm;