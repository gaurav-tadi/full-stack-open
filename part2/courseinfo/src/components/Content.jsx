import Part from "./Part"

export default function ({contents}){
    return (
        contents.map((content) => (
            <Part key={content.id} content={content}/>
        ))
    )
}