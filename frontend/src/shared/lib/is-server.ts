export const isServer = (): boolean => {
    if (typeof window === 'undefined') {
        return true
    }
    return false
}