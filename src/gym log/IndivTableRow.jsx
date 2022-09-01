function IndivTableRow( {details, inputObj, setInputObj} ) {

    const handleDelete = (uuidToRemove) => {
        setInputObj(inputObj.filter(entry => entry.uuid !== uuidToRemove)); 
    }


    return (
        <tr key={details.uuid} className="hover">
            <td>{details.weight}</td>
            <td>{details.set}</td>
            <td>{details.rep}</td>
            <td>{details.weight * details.set * details.rep}</td>
            <td className="w-48">{details.remarks}</td>
            <td><button onClick={() => handleDelete(details.uuid)}>-</button></td>
        </tr>
    )
}

export default IndivTableRow; 



