import Link from "next/link";
import Page from './_components/page';

export default function Home() {

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold font-mono mb-10">Welcome to Home Page</h1>
            <div className="flex items-center gap-10">
                <Link href="/about" className='decoration-0 text-lime-400 font-semibold text-lg'>About</Link>
                <Link href="/services" className='decoration-0 text-lime-400 font-semibold text-lg'>Services</Link>
                <Link href="/blogs" className='decoration-0 text-lime-400 font-semibold text-lg'>Blog</Link>
                <Link href="/contact" className="decoration-0 text-lime-400 font-semibold text-lg">Contact</Link>
                <Link href="/posts" className="decoration-0 text-lime-400 font-semibold text-lg">Posts</Link>
            </div>
            <Page />
        </div>
    );
}
