import { notifRequestError, notifSuccess } from "../modules";

export default getCardsAPI = async () => {
    try {
        const apiResult = await fetch(
            'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
            {
                headers: {
                    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
                    'x-rapidapi-key': '8d182f1086mshb09ace2dcf0592ap15ac2ajsn9beddd029605'
                },
                method: 'get'
            }
        )
        const apiResultJSON = await apiResult.json()
        return notifSuccess(apiResultJSON)
    } catch (error) {
        console.log("getCardsAPI->error", error);
        return notifRequestError
    }
}