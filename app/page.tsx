import connectDB from '@/lib/connect-db'
import Image from "next/image"

export default async function Home() {
    await connectDB()
    
    return (
        <main>

        </main>
    )
}
