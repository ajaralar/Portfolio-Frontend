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

export const techHomeLoader = () => fetchData('/tech/', 'Failed to fetch Tech Home data');
export const techAboutLoader = () => fetchData('/tech/about', 'Failed to fetch Tech About data');
export const techResumeLoader = () => fetchData('/tech/resume', 'Failed to fetch Tech Resume data');
export const techConnectLoader = () => fetchData('/tech/connect', 'Failed to fetch Tech Connect data');
export const techProjectsLoader = () => fetchData('/tech/projects', 'Failed to fetch Tech Projects data');
export const techFooterLoader = () => fetchData('/tech/footer', 'Failed to fetch Tech Footer data');