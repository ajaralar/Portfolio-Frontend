const BACK_DOMAIN = import.meta.env.VITE_BACK_DOMAIN;

export const homeLoader = async () => {
    try {
        const response = await fetch(`${BACK_DOMAIN}/tech/`)
        if (!response.ok) {
            throw new Response('Failed to fetch Home data', { status: response.status })
        }
        return response.json()
    } catch (error) {
        console.error('Home Loader Error', error);
        throw error
    }
}

export const aboutLoader = async () => {
    try {
        const response = await fetch(`${BACK_DOMAIN}/tech/about`)
        if (!response.ok) {
            throw new Response('Failed to fetch About data', { status: response.status })
        }
        return response.json()
    } catch (error) {
        console.error('About Loader Error', error);
        throw error
    }
}

export const resumeLoader = async () => {
    try {
        const response = await fetch(`${BACK_DOMAIN}/tech/resume`)
        if (!response.ok) {
            throw new Response('Failed to fetch Resume data', { status: response.status })
        }
        return response.json()
    } catch (error) {
        console.error('Resume Loader Error', error)
        throw error
    }
}

export const connectLoader = async () => {
    try {
        const response = await fetch(`${BACK_DOMAIN}/tech/connect`)
        if (!response.ok) {
            throw new Response('Failed to fetch Connect data', { status: response.status })
        }
        return response.json()
    } catch (error) {
        console.error('Connect Loader Error', error)
        throw error
    }
}

export const projectsLoader = async () => {
    try {
        const response = await fetch(`${BACK_DOMAIN}/tech/projects`)
        if (!response.ok) {
            throw new Response('Failed to fetch Projects data', { status: response.status })
        }
        return response.json()
    } catch (error) {
        console.error('Projects Loader Error', error)
        throw error
    }
}

export const footerLoader = async () => {
    try {
        const response = await fetch(`${BACK_DOMAIN}/tech/footer`)
        if (!response.ok) {
            throw new Response('Failed to fetch Footer data', { status: response.status })
        }
        return response.json()
    } catch (error) {
        console.error('Footer Loader Error', error)
        throw error
    }
}