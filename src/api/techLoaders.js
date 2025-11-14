const URL = 'http://localhost:3000/tech'

export const aboutLoader = async () => {
    try {
        const response = await fetch(`${URL}/about`)
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
        const response = await fetch(`${URL}/resume`)
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
        const response = await fetch(`${URL}/connect`)
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
        const response = await fetch(`${URL}/projects`)
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
        const response = await fetch(`${URL}/footer`)
        if (!response.ok) {
            throw new Response('Failed to fetch Footer data', { status: response.status })
        }
        return response.json()
    } catch (error) {
        console.error('Footer Loader Error', error)
        throw error
    }
}