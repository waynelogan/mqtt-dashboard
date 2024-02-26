import connectDB from '@/lib/connect-db'
import Image from "next/image"

export default async function Home() {
    await connectDB()
    
    return (
        <main className = {`
            w-screen min-h-screen
        `}>
            <h1>
                MQTT Dashboard
            </h1>
            
        </main>
    )
}
