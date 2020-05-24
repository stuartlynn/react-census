import React, { useMemo } from 'react'
import { useACS, LoadingState } from '@react-census/use-acs'
import { ACSProduct, Vintage, GeoHierarchy } from '@react-census/types';
import ReactTable from 'react-table'

type DataTableProps = {
    vintage: Vintage,
    product: ACSProduct,
    variables: string[],
    geoHierarchy: GeoHierarchy
}

export function DataTable({ vintage, product, variables, geoHierarchy }: DataTableProps) {
    const [data, error, state] = useACS({
        vintage,
        product,
        variables,
        geoHierarchy,
    });

    const columns = useMemo(() => {
        if (data && data.length > 0) {
            return Object.keys(data[0]).map((c) => ({ Header: c, accessor: c }))
        }
    }, [data])

    return (
        <div className='data-table'>
            {state === LoadingState.loading &&
                <h2>Loading...</h2>
            }
            {state === LoadingState.done &&
                <table>
                    <thead>
                        <tr>
                            {columns?.map(c => <td>{c.Header}</td>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map(row =>
                            <tr>
                                {Object.values(row).map((val => <td>{`${val}`}</td>))}
                            </tr>
                        )}
                    </tbody>
                </table>
            }
            {state === LoadingState.failed &&
                <h2>Failed to load : {error} </h2>
            }
        </div>
    )
}
