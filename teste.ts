const rockets = [
    {"name": "Andromeda", "id": '1'},
    {"name": "Antares", "id": '2'},
    {"name": "Antares", "id": '3'}
]

export type Rocket = {
    id: string
    name: string
}

export const getRockets = async (filter: Partial<Rocket>) => {
    return rockets.filter(rocket => {
            let filtered = true
            for (const [key, value] of Object.entries(filter)) {
                if (rocket[key as keyof Rocket] !== value) filtered = false
            }
            return filtered
        }
    )
}

getRockets({ id: '1' }).then(console.log)