function Site( props ) {
    const {a_tag} = props
    var li = []
    for(let i = 0; i < a_tag.length; i++) {
        li = li.concat(
        <li>
            <a href={a_tag[i].href}>{a_tag[i].tex}</a>
            </li>
        )
    }

    // for문의 li태그를 return에 넣는다
    return(
        <nav><ul>{li}</ul></nav>
    )
}
export default Site;