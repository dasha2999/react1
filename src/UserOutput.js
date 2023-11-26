import React from "react"

// 2 вариант ({text}) => console.log(text)
// 3 вариант (props) => const { text } = props

export const UserOutput = (props) => {
    const { mainText} = props
    return (
        <div>
            { mainText}
        </div>
    )
}