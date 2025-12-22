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

export const homeLoader = () => fetchData('/tech/', 'Failed to fetch Home data');
export const aboutLoader = () => fetchData('/tech/about', 'Failed to fetch About data');
export const resumeLoader = () => fetchData('/tech/resume', 'Failed to fetch Resume data');
export const connectLoader = () => fetchData('/tech/connect', 'Failed to fetch Connect data');
export const projectsLoader = () => fetchData('/tech/projects', 'Failed to fetch Projects data');
export const footerLoader = () => fetchData('/tech/footer', 'Failed to fetch Footer data');