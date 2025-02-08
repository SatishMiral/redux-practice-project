import { useSelector } from "react-redux"

const TotalCost = () => {
    const totalCost = useSelector((state) => state.cost.costs)
    console.log(useSelector((state) => state.cost.costs))
    return(
        <div className="bg-blue-500 text-2xl text-white font-bold mt-2 p-2 rounded-lg mx-auto max-w-fit px-6">
            <p>Total Cost: $ {totalCost} </p>
        </div>
    )
}

export default TotalCost