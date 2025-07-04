import React from 'react'

const SubSectionTitle = ({ title }: { title: string }) => {
    return (
        <div>
            <h3 className="text-3xl font-semibold text-white">{title}</h3>
            <hr className='text-neutral-400 mt-2' />
        </div>
    )
}

export default SubSectionTitle