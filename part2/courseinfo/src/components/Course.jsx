import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course}) => {
    return (
        <>
        <Header name={course.name}/>
        <Content contents={course.parts}/>
        <Total courses={course.parts}/>
        </>
    )
}

export default Course