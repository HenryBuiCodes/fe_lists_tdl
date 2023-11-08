import todoListinit from './todolistinit'

const DashboardPage = () => {
    return <>
        <p className="text-3xl flex justify-center p-5">
            Dashboard
        </p>
        <div className="grid grid-cols-3 gap-5 w-full">
            {
                todoListinit().map(({ title, css, des, navigate }, index) => {
                    return <div className={css ? css : 'border rounded-md p-5 flex justify-center items-center cursor-pointer'} onClick={navigate} key={index}>
                        <p>
                            {title}
                        </p>
                        <p>
                            {des}
                        </p>
                    </div>
                })
            }


        </div>
    </>
}

export default DashboardPage