import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
    error?: string | {};
    message?: string;
};

export function sendEmail(req: NextApiRequest, res: NextApiResponse<Data>) {
    // let toArr = ["pigletpack@protonmail.com"];
    let fromAddr = req.body.fromAddr;
    let message = req.body.message;
    let bodySubject = req.body.subject;
    let mess = {};
    // Set region
    // AWS.config.update({ region: "us-east-1" });
    const awsMessage = `${fromAddr}\n${bodySubject}\n\n${message}`;

    // Create publish parameters
    // var params = {
    //     Message: awsMessage /* required */,
    //     TopicArn: "arn:aws:sns:us-east-1:911310303347:pigletpack",
    // };

    // Create promise and SNS service object
    // var publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
    //     .publish(params)
    //     .promise();

    // Handle promise's fulfilled/rejected states
    // publishTextPromise
    //     .then(function (data: any) {
    //         console.log(
    //             `Message ${params.Message} sent to the topic ${params.TopicArn}`
    //         );
    //         console.log("MessageID is " + data.MessageId);
    //         res.status(200);
    //         mess = { message: `Success!    ${data.MessageId}` };
    //     })
    //     .catch(function (err) {
    //         console.error(err, err.stack);
    //         res.status(400);
    //         mess = { error: err.stack.toString() };
    //     });
    res.send(mess);
}

export default sendEmail;
