import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import useRefNewUser from '../modal/hook/useRefNewUser'

export default function NewUserModal({ reloadFunction }) {
    let [isOpen, setIsOpen] = useState(false)
    const { userFormRef, submitUser } = useRefNewUser();
    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <Button onClick={open} className=" text-white text-xl bg-yellow-500 rounded items-center justify-center px-4 w-auto h-12"> Add New User</Button>

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-black/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h1" className="text-2xl font-medium text-black">
                                Create new user
                            </DialogTitle>

                            <form
                                ref={userFormRef} //all input attributes will be put in here upon submission
                                className="p-4 md:p-5">

                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2 sm:col-span-1">
                                        <label for="firstName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                        <input type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your first name" required="" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label for="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                        <input type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your last name" required="" />
                                    </div>
                                    <div className="col-span-2">
                                        <label for="balance" className="block mb-2 text-sm font-medium text-gray-900">Balance</label>
                                        <input type="number" name="balance" id="balance" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" />
                                    </div>
                                    <div className="col-span-2">
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="YourEmail@gmail.com" required="" />
                                    </div>
                                    {/* <div className="col-span-2 sm:col-span-1">
                                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                                        <select id="category" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option selected="">Select category</option>
                                            <option value="TV">TV/Monitors</option>
                                            <option value="PC">PC</option>
                                            <option value="GA">Gaming/Console</option>
                                            <option value="PH">Phones</option>
                                        </select>
                                    </div> */}
                                    {/* <div className="col-span-2">
                                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900">Product Description</label>
                                        <textarea id="description" rows="4" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea>
                                    </div> */}

                                </div>
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-green-700 py-1.5 px-5 text-md/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700 transform translate-y-6"
                                    onClick={(e) => {
                                        submitUser(e, reloadFunction);
                                        close();
                                    }}
                                >
                                    Confirm
                                </Button>

                            </form>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}