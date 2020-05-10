import React from 'react'
import Rating from './rating'

const RatingFilter = ({count, onchange}) => {

return (<div>
    <Rating count={count} change={onchange} />
</div>)
}
export default RatingFilter 