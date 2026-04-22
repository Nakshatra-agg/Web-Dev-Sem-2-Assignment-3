// import React, { useState } from 'react'
// import students from '../data'

// const reportcard = () => {

//     const[studentdata,setstudentdata]=useState(students)

//     // console.log(students)
//     // let name = 'rahul'
//     // let marks = '90'

//     let studentobj={
//         name:"",
//         marks:"",
//     }
//     function submithandler(e){
//         e.preventDefault()
//         // console.log(e.target.name.value)
//         // console.log(e.target.marks.value)
//         studentobj.name=e.target.name.value
//         studentobj.marks=e.target.marks.value
//         console.log(studentobj)

//         // students.push(studentobj)
//         setstudentdata((prevdata)=>{
//             return[...prevdata,studentobj]
//         })
//     }
//     return (
//         <div>
//             <h1>Reportcard</h1>
//             <form onSubmit={submithandler}>
//                 <input name='name' placeholder='name'/>
//                 <input name='marks' placeholder='marks'/>
//                 <button>add details</button>
//             </form>
            
//             {/* <h1>Reportcard</h1>
//             <div>
//                 <p>name:{students[0].name}</p>
//                 <p>marks:{students[0].marks}</p>
//                 <hr/>
//                 <p>name:{students[1].name}</p>
//                 <p>marks:{students[1].marks}</p>
//                 <hr/>
//                 <p>name:{students[2].name}</p>
//                 <p>marks:{students[2].marks}</p>
//                 <hr/>
//                 <p>name:{students[3].name}</p>
//                 <p>marks:{students[3].marks}</p>
//                 <hr/>
//             </div> */}

//             {/* map is used to render array data */}
//             {
//                 studentdata.map((item, index) => {
//                     return <div key={index}>
//                         <p>{item.name}</p>
//                         <p>{item.marks}</p>
//                         <hr />
//                     </div>
//                 })
//             }
//         </div>

//     )
// }
// export default reportcard








import React, { useState } from 'react'
import students from '../data'

const reportcard = () => {

    const [studentdata, setstudentdata] = useState(students)

    function submithandler(e) {
        e.preventDefault()

        let studentobj = {
            name: e.target.name.value,
            marks: Number(e.target.marks.value),
        }

        setstudentdata((prevdata) => {
            return [...prevdata, studentobj]
        })

        e.target.reset()
    }
    
    const total = studentdata.reduce((sum, s) => sum + Number(s.marks), 0)
    const average = studentdata.length ? (total / studentdata.length).toFixed(2) : 0
    const passed = studentdata.filter(s => s.marks >= 40).length
    const failed = studentdata.filter(s => s.marks < 40).length

    return (
        <div>
            <h1>Reportcard</h1>

            <form onSubmit={submithandler}>
                <input name='name' placeholder='name' />
                <input name='marks' placeholder='marks' type='number' />
                <button>add details</button>
            </form>

            <div>
                <p>total: {total}</p>
                <p>Average: {average}</p>
                <p style={{ color: "green" }}>Passed: {passed}</p>
                <p style={{ color: "red" }}>Failed: {failed}</p>
            </div>

            {
                studentdata.map((item, index) => {
                    const status = item.marks >= 40 ? "Pass" : "Fail"

                    return <div key={index}>
                        <p>{item.name}</p>
                        <p>{item.marks}</p>

                        <p style={{ color: status === "Pass" ? "green" : "red" }}>
                            {status}
                        </p>

                        <hr />
                    </div>
                })
            }
        </div>
    )
}

export default reportcard