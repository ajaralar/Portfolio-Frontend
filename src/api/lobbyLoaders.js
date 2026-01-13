const BACK_DOMAIN = import.meta.env.VITE_BACK_DOMAIN;

const fetchData = async (endpoint, errorMessage) => {
    try {
        const response = await fetch(`${BACK_DOMAIN}${endpoint}`)
        if (!response.ok) {
            throw new Response(JSON.stringify({ message: errorMessage }), {
                status: response.status,
                headers: { "Content-Type": "application/json" }
            })
        }

        return await response.json()
    } catch (error) {
        console.error(`${errorMessage}:`, error)
        throw error
    }
}

export const homeLoader = () => fetchData('/', 'Failed to fetch Home data')