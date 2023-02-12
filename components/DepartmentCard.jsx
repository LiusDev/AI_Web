import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from './'

const DepartmentCard = ({ department }) => {
    return (
        <div className='card-bg m-5 rounded-xl overflow-hidden flex flex-col w-full lg:w-1/3'>
            <div className='h-64 overflow-hidden group'>
                <Link href={ department.postLink } target="_blank">
                    <Image
                        src={ department.featuredImage }
                        alt={ department.name }
                        width={ 500 }
                        height={ 500 }
                        className='object-cover object-center w-full group-hover:scale-105 transition-all'
                    />
                </Link>
            </div>
            <div className='p-6 flex flex-col justify-between'>
                <h2 className='text-3xl font-bold text-center mb-4'>{ department.name }</h2>
                <p className='mb-4'>{ department.description }</p>
                <div className='text-center'>
                    <Button href={ department.postLink }>
                        Tìm hiểu thêm <FaArrowRight className="w-4 h-4 inline-block group-hover:translate-x-1 transition-all" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DepartmentCard