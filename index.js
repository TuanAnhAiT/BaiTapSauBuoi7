const divTag = document.getElementById("list-member");
function ListMember() {
    const [listReact, setListReact] = React.useState([
        { name: "Đinh Tuấn Anh", age: 16, memberClass: "react" },
        { name: "Ngụy Minh Thắng", age: 20, memberClass: "react" },
        { name: "Nguyễn Anh Thư", age: 21, memberClass: "react" }
    ]);
    const [listJava, setListjava] = React.useState([
        { name: "Bế Trọng Hiếu", age: 19, memberClass: "java" },
        { name: "Ngô Huỳnh Đức", age: 20, memberClass: "java" },
        { name: "Nguyễn Mạnh Dũng", age: 21, memberClass: "java" }
    ]);
    const [dataMember, setDataMember] = React.useState({
        name: "",
        age: "",
        memberClass: "react"
    });
    const [editIndex, setEditIndex] = React.useState();

    React.useEffect(() => {
        if (listReact.length === 0)
            alert('Warning: React class is empty now')
        else if (listJava.length === 0)
            alert('Warning: Java class is empty now')
    }, [listReact])

    const tranferMember = (e) => {
        if (e.memberClass === "react") {
            e.memberClass = "java";
            const new_arr = listReact.filter(item => item.memberClass !== "java");
            setListReact(new_arr);
            setListjava([...listJava, e]);
        }
        else {
            e.memberClass = "react";
            const new_arr = listJava.filter(item => item.memberClass !== "react");
            setListjava(new_arr);
            setListReact([...listReact, e]);
        }
    }
    const setName = (e) => {
        setDataMember({ ...dataMember, name: e.target.value });
    }
    const setAge = (e) => {
        setDataMember({ ...dataMember, age: e.target.value });
    }
    const setClass = (e) => {
        setDataMember({ ...dataMember, memberClass: e.target.value });
    }
    const addNewMember = () => {
        if (dataMember.memberClass === "react") {
            setListReact([...listReact, dataMember]);
        }
        else {
            setListjava([...listJava, dataMember])
        }
        setDataMember({
            name: "",
            age: "",
            memberClass: "react"
        })
    }
    const handleEditClick = (e, i) => {
        setDataMember({
            name: e.name,
            age: e.age,
            memberClass: e.memberClass
        })
        setEditIndex(i);
    }
    const editMember = () => {
        if (dataMember.memberClass === "react") {
            listReact[editIndex] = dataMember;
            setListReact([...listReact]);
        }
        else {
            listJava[editIndex] = dataMember;
            setListjava([...listJava]);
        }
        setDataMember({
            name: "",
            age: "",
            memberClass: "react"
        })
    }

    return (
        <div>
            <div className="list-react">
                <h2 className="title">list member of React class</h2>
                {
                    listReact.length > 0 ? listReact.map((value, index) => {
                        return (
                            <div key={value.name}>name: {value.name} - age: {value.age}
                                <button onClick={() => tranferMember(value)}>tranfer</button>
                                <button onClick={() => handleEditClick(value, index)}>edit</button>
                            </div>
                        )
                    }) : "empty class"
                }
            </div>
            <div className="list-java">
                <h2 className="title">list member of Java class</h2>
                {
                    listJava.length > 0 ? listJava.map((value, index) => {
                        return (
                            <div key={value.name}>name: {value.name} - age: {value.age}
                                <button onClick={() => tranferMember(value)}>tranfer</button>
                                <button onClick={() => handleEditClick(value, index)}>edit</button>
                            </div>
                        )
                    }) : "empty class"
                }
            </div>
            <div className="form-add-member">
                <h2 className="title">Form add member</h2>
                <lable>name</lable>
                <input onChange={setName} name="name" value={dataMember.name} type="text"></input>
                <lable>age</lable>
                <input onChange={setAge} name="age" value={dataMember.age} type="text"></input>
                <select value={dataMember.memberClass} onChange={setClass} name="class">
                    <option value="react">react</option>
                    <option value="java">java</option>
                </select>
                <br />
                <button onClick={addNewMember}>add member</button>
                <button onClick={editMember}>edit member</button>
            </div>
        </div>
    )
}

ReactDOM.render(<div>
    <ListMember />
</div>, divTag);
