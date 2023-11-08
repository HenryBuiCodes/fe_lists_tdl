import Button from '../../components/Button'

const React_Django = () => {
    return <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center border rounded-md p-5 max-w-3xl min-w-[500px]">
            <p className=" uppercase">Django API to do list</p>
            <div  className="w-full p-5 flex gap-5 items-center">
                <input type="text" className="border rounded-md w-full"/>
                <Button title="Create" apiInfo={{
                    action: 'create',
                    type: 'django'
                }} />
            </div>
            <div className="w-full p-5 flex gap-5 items-center">
                <p className="flex flex-1">Title: to do task</p>
                <Button title="Edit" apiInfo={{
                    action: 'Update',
                    type: 'django'
                }} />
                <Button title="Delete" apiInfo={{
                    action: 'Delete',
                    type: 'django'
                }} />
            </div>
        </div>
    </div>
}

export default React_Django