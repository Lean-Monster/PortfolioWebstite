export default function tagComponent(props: {tagName: string}){

    return (
        <span className="inline rounded-2xl border-[#b8dbd9] border-2 px-1 py-1 leading-1.0 text-lg text-[#b8dbd9] ">
            {props.tagName}
        </span>
    )
}