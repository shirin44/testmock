import sendHttpRequest from "../../../http_call/HttpRequest";
import CustomerUrlConfig from "../../../service_url/CustomerUrlConfig";

async function updateUser(updateUser,id) {
    let response = await sendHttpRequest(
        CustomerUrlConfig.CUSTOMER_UPDATE + `/${id}`, //url
        "PUT",
        JSON.stringify(updateUser) //body
    )
    return response
}
export default updateUser