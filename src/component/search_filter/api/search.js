import sendHttpRequest from "../../../http_call/HttpRequest";
import CustomerUrlConfig from "../../../service_url/CustomerUrlConfig";
const search = async (searchKey, setFunction) => {

    let instruction = ` `;
    if (searchKey.length != 0) {
        instruction = `${CustomerUrlConfig.CUSTOMER_SEARCH}/${searchKey}`
    }
    else {
        instruction = `${CustomerUrlConfig.CUSTOMER_SERVICE_URL}`
    }
    let response = await sendHttpRequest(instruction)

    if (response.status == 200) {
        setFunction(response.json);
    } else if (response.status >= 500) {
        return "Server Error"
    } else if (response.status >= 400) {
        return "Client Error"
    }


}
export default search