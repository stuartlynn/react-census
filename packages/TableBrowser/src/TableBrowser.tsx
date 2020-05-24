import React, { useState, useEffect } from 'react'
import { useTableDefinition, useConcept } from '@react-census/use-table-definition'

type TableBrowserProps = {
    survey?: string,
    onSelectVariable?: (variable: string) => void,
    selectedVariables?: string[]
}

export function TableBrowser({ survey, onSelectVariable, selectedVariables }: TableBrowserProps) {
    const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('')

    const deffs = useTableDefinition()
    const concepts = useConcept()

    const filteredDeffs = deffs?.filter(v => v.concept === selectedConcept)

    const filterdConcetps = concepts?.filter(c => c?.toLowerCase().includes(searchTerm.toLowerCase()))

    const [page, setPage] = useState<number>(0)
    const pages = filteredDeffs?.length
    const perPage = 20;
    const totalPages = pages ? Math.ceil(pages / perPage) : 0
    const pagedDeffs = filteredDeffs?.slice(page * perPage, (page + 1) * perPage)


    useEffect(() => {
        setPage(0)
    }, [selectedConcept])


    const selectVariable = (variable: string) => {
        if (onSelectVariable) {
            onSelectVariable(variable)
        }
    }
    const updateSearchString = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(event.target.value);
    }


    return (
        <div className={'table-browser'}>
            <div className='concepts'>
                <input onChange={updateSearchString} value={searchTerm} placeholder={"Search Concepts"} />
                <ul>
                    {filterdConcetps?.map(c => <li style={{ fontWeight: c === selectedConcept ? 'bold' : 'normal' }} onClick={() => setSelectedConcept(c)}>{c}</li>)}2
            </ul>
            </div>
            <div className='concept-variables'>
                <table>
                    <thead>
                        <tr>
                            <td>CODE</td>
                            <td>label</td>
                            <td>Group</td>
                        </tr>
                    </thead>
                    <tbody>
                        {pagedDeffs &&
                            pagedDeffs.map(row => <tr className={selectedVariables?.includes(row.id) ? 'paleBlueRows selected' : 'paleBlueRows'} onClick={() => selectVariable(row.id)} >
                                <td>{row.id}</td>
                                <td>{row.label}</td>
                                <td>{row.group}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <div>
                    <button onClick={() => setPage(Math.max(0, page - 1))}>Prev</button>
                    <button onClick={() => setPage(Math.min(totalPages, page + 1))}>Next</button>
                </div>
            </div>


        </div >
    )
}