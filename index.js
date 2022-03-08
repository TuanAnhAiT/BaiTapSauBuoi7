const divTag = document.getElementById("list-member");
function ListMember() {
    const [listReact, setListReact] = React.useState([
        { name: "Đinh Tuấn Anh", age: 16, class: "react" },
        { name: "Ngụy Minh Thắng", age: 20, class: "react" },
        { name: "Nguyễn Anh Thư", age: 21, class: "react" }
    ]);
    const [listJava, setListjava] = React.useState([
        { name: "Bế Trọng Hiếu", age: 19, class: "java" },
        { name: "Ngô Huỳnh Đức", age: 20, class: "java" },
        { name: "Nguyễn Mạnh Dũng", age: 21, class: "java" }
    ]);

    React.useEffect(() => {
        if(listReact.length === 0)
            alert('Warning: React class is empty now')
        if(listJava.length === 0)
            alert('Warning: Java class is empty now')
    }, [listReact])

    let tranferMember = (e) => {
        if(e.class === "react"){
            e.class = "java";
            const new_arr = listReact.filter(item => item.class !== "java");
            setListReact(new_arr);
            setListjava([...listJava, e]);
        }
        else{
            e.class = "react";
            const new_arr = listJava.filter(item => item.class !== "react");
            setListjava(new_arr);
            setListReact([...listReact, e]);
        }
    }

    return (
        <div>
            <div className="list-react">
                <h2 className="title">list member of React class</h2>
                {
                    listReact.map((value, key) => {
                        return (
                            <div key={value.name}>name: {value.name} - age: {value.age}
                                <button onClick={() => tranferMember(value)}>tranfer</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className="list-java">
                <h2 className="title">list member of Java class</h2>
                {
                    listJava.map((value, key) => {
                        return (
                            <div key={value.name}>name: {value.name} - age: {value.age}
                                <button onClick={() => tranferMember(value)}>tranfer</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

ReactDOM.render(<div>
    <ListMember />
</div>, divTag);
