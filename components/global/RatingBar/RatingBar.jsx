import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconO } from '@heroicons/react/24/outline'
import React from 'react'

function RatingBar({ rating, starClassName }) {

    return (
        <div className="flex flex-row gap-0.5">
            {
                "*".repeat(rating).split('').map((e,i) => (
                    <StarIcon key={i} className={starClassName} />
                ))
            }
            {
                "*".repeat(5 - rating).split('').map((e,i) => (
                    <StarIconO key={i} className={starClassName} />
                ))
            }
            <div className="text-sm ml-4">
                ({rating})
            </div>
        </div>
    )
}

export default RatingBar