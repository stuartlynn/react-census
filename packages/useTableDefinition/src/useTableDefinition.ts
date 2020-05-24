import { useState, useEffect } from 'react'

export type ACSVariable = {
    id: string,
    concept: string,
    group: string,
    label: string,
    predicateType: string,
    attributes: string[]

}
export function useTableDefinition(): ACSVariable[] | undefined | null {
    const [definition, setDefintion] = useState<ACSVariable[] | null | undefined>(null)
    useEffect(() => {
        fetch('https://api.census.gov/data/2018/acs/acs1/variables.json').then(res => res.json()).then(r => {
            setDefintion(Object.keys(r.variables)
                               .map((v: string): ACSVariable => ({ ...r.variables[v], id: v }))
                               .filter(v =>v.label!=='Geography')
                               )
        })
    }, [])

    return definition
}

export function useConcept(): string[] | undefined | null {
    const definitions = useTableDefinition()
    const concepts = Array.from(new Set(definitions?.map(d => d.concept)))
    return concepts
}