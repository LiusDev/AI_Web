import React from 'react'
import { DepartmentCard } from '.'

const departments = [
    {
        id: 1,
        name: 'Ban Học thuật',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio ab nostrum, minima excepturi ipsa, fuga odio consequatur esse beatae ut quisquam unde quod reprehenderit eum laborum et doloremque animi voluptate corporis dicta necessitatibus? nde quod reprehenderit eum laborum et dolorem',
        featuredImage: '/department.jpg',
        postLink: 'https://www.facebook.com/x.quy.203'
    },
    {
        id: 2,
        name: 'Ban Văn hoá',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio ab nostrum, minima excepturi ipsa, fuga odio consequatur esse beatae ut quisquam unde quod reprehenderit eum laborum et doloremque animi voluptate corporis dicta necessitatibus?',
        featuredImage: '/department.jpg',
        postLink: 'https://www.facebook.com/x.quy.203'
    },
    {
        id: 3,
        name: 'Ban Truyền thông',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio ab nostrum, minima excepturi ipsa, fuga odio consequatur esse beatae ut quisquam unde quod reprehenderit eum laborum et doloremque animi voluptate corporis dicta necessitatibus?',
        featuredImage: '/department.jpg',
        postLink: 'https://www.facebook.com/x.quy.203'
    }
]

const Department = () => {
    return (
        <section id='departments' className='container mt-20 mx-auto px-5 flex items-center justify-center z-10 relative'>
            <div className='flex flex-col items-center justify-between'>
                <h1 className='text-2xl md:text-4xl font-bold mb-6'>Departments</h1>
                <div className='flex flex-col lg:flex-row items-center lg:items-start'>
                    { departments.map(department => (
                        <DepartmentCard key={ department.id } department={ department } />
                    )) }
                </div>
            </div>
        </section>
    )
}

export default Department