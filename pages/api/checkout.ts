import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { NextApiRequest, NextApiResponse } from "next";

import mercadopago from "mercadopago";

mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN || process.env.NEXT_MP_ACCESS_TOKEN!,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const product = req.body.product;

        const URL = `https://www.marconinutricion.com`
        const redirectURL = `https://www.marconinutricion.com/${[product.redirectUrl]}`;


        try {
            const preference: CreatePreferencePayload = {
                items: [
                    {
                        title: product.id,
                        unit_price: product.price,
                        quantity: 1,
                    },
                ],
                binary_mode: true,
                payment_methods: {
                    excluded_payment_types: [
                        {
                            id: "ticket"
                        },
                        {
                            id: "atm"
                        }
                    ],
                    installments: 1
                },
                auto_return: "approved",
                back_urls: {
                    success: `${redirectURL}`,
                    failure: `${redirectURL}`,
                },
                notification_url: `${URL}/api/notify`,
            };

            const response = await mercadopago.preferences.create(preference);

            res.status(200).send({ url: response.body.init_point });
        } catch (error) { }
    } else {
        res.status(400).json({ message: "Method not allowed" });
    }
};

export default handler;