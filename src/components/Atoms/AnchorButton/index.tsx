import Link from "next/link";
import { ReactNode } from "react";

export interface IAnchorButton{
    href?: string;
    children?: ReactNode
}
export function AnchorButton({ href = '/', children }: IAnchorButton) {
    return (
        <Link
            href={href}
            className='
                uppercase 
                inline-block 
                rounded-full 
                bg-green-500 
                px-5 
                py-3 
                font-alt 
                text-sm 
                leading-none 
                text-black 
                hover:bg-green-600
            '>
            {children}
        </Link>
    )
}