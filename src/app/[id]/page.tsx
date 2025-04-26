import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: 'Dynamic Route Example',
    description: 'This is an example of a dynamic route in Next.js.',
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <div className='flex flex-col items-center justify-center text-2xl h-screen'>
            {id ? (
                <p>ID: {id}</p>
            ) : (
                <p>No ID found.</p>
            )}
        </div>
    )
}

export default Page;