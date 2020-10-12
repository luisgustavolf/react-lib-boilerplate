export interface UseHelloProps {
    name: string
}

export function useHello(props: UseHelloProps) {
    const hello = `Hello, ${props.name}!`
    
    return {
        hello
    }
}