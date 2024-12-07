import sendHttpRequest from "../../../http_call/HttpRequest";
import CustomerUrlConfig from "../../../service_url/CustomerUrlConfig";
 async function showByPage(pageNo, pageSize) {

    let customerResponse = await sendHttpRequest(
        CustomerUrlConfig.CUSTOMER_SHOWBYPAGE + `?pageNo=${pageNo}&pageSize=${pageSize}`
    );

    return customerResponse.json

}

export default showByPage