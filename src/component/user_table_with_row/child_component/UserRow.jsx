//Destructured directly from function parameter
import {Button} from "@headlessui/react"
import UpdateUserModal from "../../panel_update_user/updateUserPanel"
import DeleteUser from "../../panel_delete_user/deleteUserPanel"
const UserRow = ({ index, item,reloadFunction}) => {
    return (

        <tr className="bg-white border-b" key={index}>
            <td className="px-6 py-4 text-center" id={"NameValue" + item.id}>
                {item.firstName + " " + item.lastName}
            </td>
            <td className="px-6 py-4 text-center" id={"emailValue" + item.id}>
                {item.email}
            </td>
           <UpdateUserModal item = {item} reloadFunction={reloadFunction}/>
            <DeleteUser item = {item} reloadFunction={reloadFunction}/>
        </tr>
    )
}

export default UserRow
