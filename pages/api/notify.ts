import { NextApiRequest, NextApiResponse } from "next";
import mercadopago from "mercadopago";

mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN!,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { query } = req;


    const topic = query.topic || query.type;

    try {
        if (topic === "payment") {
            const paymentId = query.id || query["data.id"];
            let payment = await mercadopago.payment.findById(Number(paymentId));
            let paymentStatus = payment.body.status;

            if (paymentStatus === "approved") {
                setWithExpiry(`guia-inicial`, 3600000);
            }
        }
    } catch (error) {
        res.send(error);
    }
};

export default handler;

function setWithExpiry(key: string, ttl: number) {
    const now = new Date();
    const item = {
        expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
}
