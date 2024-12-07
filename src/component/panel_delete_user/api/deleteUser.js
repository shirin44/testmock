import sendHttpRequest from "../../../http_call/HttpRequest";
import CustomerUrlConfig from "../../../service_url/CustomerUrlConfig";

async function deleteUser(id) {
    let response = await sendHttpRequest(
        CustomerUrlConfig.CUSTOMER_DELETE + `/${id}`, //url
        "DELETE",
       
    )
    return response
}
export default deleteUser