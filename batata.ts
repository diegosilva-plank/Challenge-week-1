

type Launch = {
    id: number
    launchCode: string
    date: string
    sucess: boolean
    rocketId: number
}

type Crew = {
    id: number
    name: string
    launchId: number
}

type CrewMan = {
    id: number
    name: string
    patent: string
}

type CrewMan_Crew = {
    crewId: number
    crewManId: number
}